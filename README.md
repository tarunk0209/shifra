# Shifra AI – AI Voice Assistant SaaS Platform

## Overview

Shifra AI is a full-stack SaaS platform that enables businesses to create and deploy customizable AI-powered voice assistants on any website.

The platform allows business owners to configure an AI assistant with their own business information, website pages, navigation rules, branding, and Gemini API integration. Once configured, a simple script can be embedded into any website, instantly providing visitors with an intelligent voice-enabled customer support experience.

---

## Features

### AI Voice Conversations

* Speech-to-Text using Web Speech API
* Text-to-Speech responses
* Natural voice interactions with website visitors

### Custom AI Assistant Builder

* Assistant name customization
* Business information management
* Multiple themes and assistant personalities
* Business-specific knowledge base

### Website Navigation

* Voice commands can navigate users to specific pages
* Custom page keywords and routes
* Intelligent page matching

### Embeddable Widget

* One-line script installation
* Works on any website
* Floating assistant button
* Responsive popup interface

### Gemini AI Integration

* Powered by Google Gemini
* Business-aware responses
* Context-aware conversations

### Authentication

* Google Authentication using Firebase
* Secure session management
* Protected routes

### Subscription System

* Free Plan
* Pro Plan
* Razorpay payment integration
* Plan expiry management

### Usage Tracking

* Message counting
* Request limits
* Gemini status monitoring

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router
* Axios
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

### AI & Voice

* Google Gemini API
* Web Speech API
* Speech Recognition
* Speech Synthesis

### Payments

* Razorpay

### Deployment

* Render
* MongoDB Atlas

---

## Architecture

### User Flow

Business Owner

→ Login with Google

→ Configure Assistant

→ Add Gemini API Key

→ Define Website Pages

→ Save Assistant

→ Copy Embed Script

→ Paste Into Website

Website Visitor

→ Click Assistant

→ Speak Question

→ Speech Recognition

→ Backend Processing

→ Gemini Response

→ Voice Response

→ Optional Website Navigation

---

## Database Design

### User Model

Stores:

* User information
* Assistant configuration
* Business details
* Website pages
* Gemini API key
* Subscription plan
* Usage statistics

### Billing Model

Stores:

* User reference
* Payment information
* Razorpay order ID
* Razorpay payment ID
* Billing status
* Subscription plan

---

## AI Assistant Configuration

Each assistant supports:

### Business Information

* Business Name
* Business Type
* Business Description

### Assistant Customization

* Assistant Name
* Theme Selection
* Tone Selection

### Supported Themes

* Dark
* Light
* Glass
* Neon

### Supported Tones

* Friendly
* Professional
* Sales

---

## Voice Assistant Workflow

### Step 1

User clicks microphone button.

### Step 2

Speech Recognition converts voice into text.

### Step 3

Text is sent to backend API.

### Step 4

Backend loads assistant configuration.

### Step 5

Navigation intent is checked.

### Step 6

If navigation is requested:

* Match page keywords
* Return navigation command

Otherwise:

* Build Gemini prompt
* Generate AI response

### Step 7

Frontend receives response.

### Step 8

Text-to-Speech reads response aloud.

---

## Website Navigation Engine

Example:

Configured Page

Name:
Pricing

Path:
/pricing

Keywords:
pricing, plans, cost, subscription

User says:

"Open pricing page"

Assistant:

"Opening Pricing"

Website automatically redirects to:

/pricing

---

## SaaS Business Model

### Free Plan

* 200 AI messages
* Voice assistant
* Website navigation
* Gemini integration

### Pro Plan

* Unlimited AI messages
* Advanced assistant features
* 3-month subscription
* Priority usage

---

## Payment Flow

### Create Order

Frontend requests a Razorpay order.

### Razorpay Checkout

User completes payment.

### Verification

Backend verifies:

* razorpay_order_id
* razorpay_payment_id
* razorpay_signature

### Upgrade User

Plan is upgraded to Pro.

### Subscription Expiry

90-day expiry date is automatically assigned.

---

## Security Features

### Authentication

* Google OAuth Login
* Secure Cookies
* Protected Routes

### Payment Security

* Razorpay Signature Verification
* HMAC SHA256 Validation
* Server-side Verification

### API Protection

* Route Middleware
* User Validation
* Request Limits

---

## Embed Assistant

Add the following script before the closing body tag:

```html
<script
  src="https://your-domain.com/assistant.js"
  data-user-id="USER_ID">
</script>
```

The assistant automatically:

* Loads configuration
* Applies branding
* Connects to backend
* Enables voice interaction

---

## Key Learning Outcomes

* Full Stack MERN Development
* SaaS Product Architecture
* AI Integration with Gemini
* Voice Assistant Development
* Authentication Systems
* Payment Gateway Integration
* Website Embedding Techniques
* MongoDB Schema Design
* REST API Development
* Deployment and Production Configuration

---

## Future Enhancements

* Multi-assistant support
* Team workspaces
* Analytics dashboard
* Conversation history
* Knowledge base uploads
* Multi-language support
* OpenAI and Claude integration
* Live chat mode
* Lead capture system
* CRM integrations

---

## Author

Karthik K

AI-Powered Voice Assistant SaaS built using MERN Stack, Gemini AI, Web Speech API, MongoDB, Razorpay, and modern web technologies.
