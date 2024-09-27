import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"

export const signUp = async (req, res) => {
    // Add user to the database
    const { username, email, password } = req.body 
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User ({username, email, password: hashedPassword})
    try {
    await newUser.save();
    res.status(201).json({ message: 'User signed up successfully' })
    }
    catch(error) {
        res.status(500).json({ message: error.message})
    }
    
    
}