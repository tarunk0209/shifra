import User from "../Models/user.model.js";
import { generateGeminiResponse } from "../Configs/gemini.js";
export const getAssistantConfig = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).select("-geminiApiKey");
    if (!user) {
      return res.status(404).json({ message: "failed to get user" });
    }

    return res.status(200).json({ message: "Assistant Config data ", user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Assistant Config failed ${error}` });
  }
};

export const askAssistant = async (req, res) => {
  try {
    const { message, userId } = req.body;

    if (!message || !userId) {
      return res
        .status(400)
        .json({ message: "Message and UserId are required" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User is not found" });
    }
    if (!user.geminiApiKey) {
      return res.status(400).json({ message: "gemini apikey is not added" });
    }

    if (user.plan === "free" && user.totalMessages >= user.requestLimit) {
      return res.status(400).json({ message: "Free limit reached" });
    }

    if (user.plan === "pro" && new Date(user.proExpiresAt) < new Date()) {
      user.plan === "free";

      await user.save();

      return res.status(400).json({ message: "Pro plan expired" });
    }

    const cleanMessage = message.toLowerCase();

    if (user.enableNavigation) {
      // Navigation Commands
      const navigationWords = [
        "open",
        "go",
        "start",
        "show",
        "navigate",
        "take me",
      ];

      // Check navigation intent
      const wantsNavigation = navigationWords.some((word) =>
        cleanMessage.startsWith(word),
      );

      // User wants navigation
      if (wantsNavigation) {
        // Find matching page
        const matchedPage = user.pages.find((page) =>
          page.keywords.some((keyword) =>
            cleanMessage.includes(keyword.toLowerCase()),
          ),
        );

        // Page found
        if (matchedPage) {
          // Already open
          if (req.body.currentPath === matchedPage.path) {
            return res.json({
              success: true,

              response: `${matchedPage.name} already open`,
            });
          }

          // Navigate
          return res.json({
            success: true,

            action: "navigate",

            path: matchedPage.path,

            response: `Opening ${matchedPage.name}`,
          });
        }
      }
    }

    const prompt = `You are ${user.assistantName}.

Business Name:
${user.businessName}

Business Type:
${user.businessType}

Business Description:
${user.businessDescription}

Assistant Tone:
${user.tone}


Rules:

- Keep replies under 25 words
- Give fast direct responses
- Talk naturally
- Behave like smart voice assistant
- Avoid long explanations
- Keep responses short for quick voice playback

User Question:
${message}`;

    const aiResponse = await generateGeminiResponse({
      prompt,
      apikey: user.geminiApiKey,
      user,
    });

    if (user.plan === "free") {
      user.totalMessages += 1;

      await user.save();
    }
    return res.json({
      success: true,
      aiResponse,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Assistant AI Error",
    });
  }
};

// const prompt = `
// You are ${user.assistantName}, the AI assistant for ${user.businessName}.

// Business Type:
// ${user.businessType}

// Business Description:
// ${user.businessDescription}

// Tone:
// ${user.tone}

// Rules:

// 1. Reply in 1 short sentence.
// 2. Maximum 15 words.
// 3. Sound natural when spoken aloud.
// 4. Never use markdown.
// 5. Never use lists.
// 6. Never mention AI, Gemini, or language models.
// 7. Use only business information provided.
// 8. If unsure, say:
//    "I'm not sure about that. Please contact our team."
// 9. Stay focused on ${user.businessName}.
// 10. Be friendly and helpful.

// Customer:
// ${message}

// Assistant:
// `;