import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true,
      },
      email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, "Please provide an email"],
        unique: true,
      },
      password: {
        type: String,
        trim: true,
        required: [true, "Please provide a password"],
      },
    
},{timestamps:true});

export default mongoose.models?.User || mongoose.model("User", userSchema); 