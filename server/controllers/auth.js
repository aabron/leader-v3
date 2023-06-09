import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

//registering users
export const register = async(req, res) => {
    try {
        const{
            firstName,
            lastName,
            userEmail,
            userPassword,
            userBrokerage,
            userLocation,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passHash = await bcrypt.hash(userPassword, salt);
        console.log(userPassword);
        const newUser = new User({
            firstName,
            lastName,
            userEmail,
            userPassword: passHash,
            userBrokerage,
            userLocation,
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({error: err.message });
    }
}


//login

export const login = async(req, res) => {
    try {
        const { userEmail, userPassword } = req.body;
        const user = await User.findOne({userEmail: userEmail});
        if(!user) return res.status(400).json({ msg: "User does not exist. " });

        const isMatch = await bcrypt.compare(userPassword, user.userPassword);
        if(!isMatch) return res.status(400).json({ msg: "Invalid Credentials. " });

        const token = jwt.sign({id: user._id }, process.env.JWT_SECRET);
        delete user.userPassword;
        res.status(200).json({token , user});
    } catch (err) {
        res.status(500).json({error: err.message });
    }
}