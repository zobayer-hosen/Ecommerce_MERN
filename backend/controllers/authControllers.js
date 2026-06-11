import User from "../models/user.js"
import bcrypt from "bcryptjs"

export const signupUser = async (req,res)=>{
    try{
        const {name, email, password} = req.body
        // Check if user already exists
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({message: "User already exists"})
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10)

        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })

        await newUser.save()
        res.status(201).json({message: "User created successfully"})
    }
    catch(error){
        res.status(500).json({message: "Server error", error: error.message})
    }
}