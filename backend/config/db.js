import mongoose from "mongoose";

export const connectDB = async () => {
   await mongoose.connect('mongodb+srv://devanshrathod12:d7724012193@cluster0.2vcsf.mongodb.net/food-del').then(()=>console.log("DB connected"));
}
