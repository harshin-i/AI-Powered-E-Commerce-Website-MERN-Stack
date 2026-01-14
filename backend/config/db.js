import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);   // ✔ MUST MATCH .env
        console.log("DB connected");
    } catch (error) {
        console.log("DB error:", error);   // ✔ Show real error
    }
};

export default connectDb;
