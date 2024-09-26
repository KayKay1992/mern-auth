import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true  },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, 
  { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;

// Import User model and create instance of it
