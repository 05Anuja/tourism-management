import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../models/User.js';

// SIGN UP
export const registerUser = async(req, res) => {
    try {
        const {name, email, password} = req.body;

        // check if user already exists
        const existingUser = await userModel.findOne({email})
        if (existingUser) {
            return res.status(400).json({
                message: "User already exist"
            });
        }
        // Hash password 
        const hashedPassword = await bcrypt.hash(password, 10);

        // create new user
        const newUser = await userModel.create({
            name, email, password: hashedPassword
        });

        // create JWT token
        const token = jwt.sign(
            {id: newUser._id},
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        )

        res.status(201).json({
            message: "User registered successfully",
            token,
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
} 

export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await userModel.findOne({email});
        if (!user) {
            return res.status(400).json({
                message: "User doesn't exists"
            })
        }

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Password"
            })
        }

        // Generate Token
        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        )

        res.status(200).json({
            message: "User Login successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email 
            }
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}