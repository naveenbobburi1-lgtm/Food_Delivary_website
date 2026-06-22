import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://<db_username>:65bc7a9CwsqhL1tQ@cluster0.bqayx4b.mongodb.net/food-del').then(()=>console.log('MongoDB connected')).catch((err)=>console.log("DB connection")); 
}