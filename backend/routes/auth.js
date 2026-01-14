import express from 'express'
import User from '../models/User.js'
import { protect } from '../middleware/auth.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

//Register
router.post('/register', async (req, res) => {
    const {username, email, password} = req.body
    try {
        if (!username || !email || !password) {
            return res.status(400).json({message: "Please fill all the fields"})
        }

        const useExists = await User.findOne({email})
        if (useExists) {
            return res.status(400).json({message: "User already exists"})
        }

        const user =await User.create({username, email, password})
        const token = generateToken(user._id)
        res.status(201).json({ //201 user created
            id: user._id,
            username: user.username,
            email: user.email,
            token
        })
    } catch (error) {
        console.error("Login error:", error)
        res.status(500).json({ message: error.messsage })
    }
})



//Login
router.post('/login', async (req, res) => {
    const {email, password} = req.body
    try {
        if(!email || !password) {
            return res.status(400).json({message: "Please fills all fields"})
        }
        const user = await User.findOne({email})


        if(!user || !(await user.matchPassword(password))) {
            return res.status(401).json({message: "Invalid email or password"})
        }

        const token = generateToken(user._id)

        res.status(200).json({ //200 user found
            id: user._id,
            username: user.username,
            email: user.email,
            token
        })
        
    } catch (error) {
        res.status(500).json({ message: "Server error"})
    }
})


//Me
router.get("/me", protect, async (req, res) => {
    res.status(200).json(req.user)
})

//Generate JWT token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "7d"})
}

export default router