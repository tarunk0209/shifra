import { getToken } from "../Configs/token.js";
import User from "../Models/user.model.js";

export const googleAuth = async (req,res)=>{
    try {
        const {email,name}=req.body;
        if(!name || !email){
            return res.status(400).json({message:"Name and email are required"});
        }
        let user=await User.findOne({email});
        if(!user){
            user=await User.create({email,name});
        }
        const token=getToken(user._id);
        res.cookie("token",token,{
            httpOnly:false,
            secure:true,
            sameSite:"none",
            maxAge:7*24*60*60*1000 
        });
        return res.status(200).json(user);
    } catch (error) {
        console.error("Error in googleAuth:",error);
        res.status(500).json({message:"Internal server error"});
    }
}

export const logOut=async (req,res)=>{
    try {
        await res.clearCookie("token",{
            httpOnly:false,
            secure:true,
            sameSite:"none",
        });
        return res.status(200).json({message:"Logged out successfully"});
    } catch (error) {
        console.error("Error in logOut:",error);
        res.status(500).json({message:"Internal server error"});
    }
}
