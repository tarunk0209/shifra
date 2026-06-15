import mongoose from "mongoose";

const billingSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    amount:Number,
    plan:String,
    paymentId:String,
    orderId:String,
    status:{
        type:String,
        enum:["created","pending","failed"],
        default:"created"
    },
}, { timestamps: true });

const Billing= mongoose.model("Billing", billingSchema);

export default Billing;