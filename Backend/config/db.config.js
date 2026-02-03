import mongoose from "mongoose";

const connectDB = async function(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database connected successfully");
    } catch (error) {
        console.log("Error in DB connection", error);
    }
};

export default connectDB;