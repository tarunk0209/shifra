import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './Configs/ConnectDB.js';
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./Routes/auth.route.js";
import userRouter from './Routes/user.route.js';
import assistantRouter from './Routes/assistant.route.js';
import billingRouter from './Routes/billing.route.js';
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const privateCors =
  cors({

    origin: [
      "https://shifra-ai-1lpi.onrender.com",
      "http://localhost:5173",
    ],

    credentials: true

  });

const publicCors =
  cors({
    origin: "*",
  });

app.use(express.json());
app.use(cookieParser());

const PORT=process.env.PORT || 8000;



app.get("/",(req,res)=>{
    res.send("Hello World");
});



app.use("/api/auth",privateCors, authRouter)
app.use("/api/user",privateCors, userRouter)
app.use("/api/billing",privateCors, billingRouter)

app.use("/api/assistant",publicCors, assistantRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
