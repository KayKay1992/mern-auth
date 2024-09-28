import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs"
import User from "../model/user.model.js";
import { errorHandler } from "../utils/error.js";

export const signUp = async (req, res, next) => {
    // Add user to the database
    const { username, email, password } = req.body 
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User ({username, email, password: hashedPassword})
    try {
    await newUser.save();
    res.status(201).json({ message: 'User signed up successfully' })
    }
    catch(error) {
       next(error)
    }
    
    
}

export const signIn = async (req, res, next) => {
    // Authenticate user using the provided credentials
    const { email, password } = req.body

    //finding a valid email and password
    try {
    const validUser = await User.findOne({ email });
    if(!validUser) 
        return next(errorHandler (404, "User not found"));
        const validPassword = bcryptjs.compare(password, validUser.password);
        if(!validPassword) return next(errorHandler (404, "Wrong Credentials"));
        
        //Generate and send a JWT token
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const {password: hashedPassword, ...rest} = validUser._doc;
        const expiryDate = new Date(Date.now() + 3600000)
        //Send the token in the response with a cookie
        res.cookie('access_token', token, {httpOnly: true, expires: expiryDate}).status(200).json(rest);
    } catch (error) {
        return next(error);
    }
}