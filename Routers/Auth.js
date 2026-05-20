const express = require("express");
const user= require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/register", async(req, res) => {
    const {email, password} = req.body;
    try {
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new user({email, password: hashPassword});
        await newUser.save();
        res.status(201).json({message: "User registered successfully"});
    } catch (error) {
        res.status(500).json({message: "Error registering user", error});
    }   
});

router.post("/login", async(req, res) => {
    const {email, password} = req.body;
    try {
        const existingUser = await user.findOne({email});
        if (!existingUser) {
            return res.status(404).json({message: "User not found"});
        }       
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({message: "Invalid password"});
        }   
        const token = jwt.sign({userId: existingUser._id}, process.env.SECRET_KEY, {expiresIn: "1h"});
        res.status(200).json({message: "Login successful", token});
    } catch (error) {
        res.status(500).json({message: "Error logging in", error});
    }       
});

module.exports = router;   
