import mongoose from "mongoose";

export async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGOURI)
        console.log(`✅ MongoDB connected: ${mongoose.connection.name} `);
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error.message);
        process.exit(1); // Finalizar inmediatamente el proceso de nodejs
    }
}