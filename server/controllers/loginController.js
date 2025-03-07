

import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import bcrypt from 'bcrypt'
import LoginUser from '../models/loginModel.js';
import RegisterUser from '../models/registerModel.js';



dotenv.config();

// Tracks failed logins and lockout time
const failedLoginAttempts = {}




const UserLoginFunction = async (req, res) => {
    const { userEmail, userPassword } = req.body;

    // Check for lockout due to too many failed attempts
    if (failedLoginAttempts[userEmail] && failedLoginAttempts[userEmail].count >= 10) {
        const timeLeft = (failedLoginAttempts[email].lockUntil - Date.now()) / 1000;
        if (timeLeft > 0) {
            return res.status(403).json({
                success: false,
                message: `Too many failed attempts. Try again in ${Math.ceil(timeLeft)} seconds.`
            });
        } else {
            // Lockout period has expired, reset the failed attempts
            delete failedLoginAttempts[userEmail];
        }
    }

    try {
        const user = await RegisterUser.findOne({ email: userEmail });
        if (!user) {
            trackFailedUserAttempts(userEmail); // Track failed login attempt
            return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }

        const validPassword = await bcrypt.compare(userPassword, user.password);
        if (!validPassword) {
            trackFailedUserAttempts(userEmail); // Track failed login attempt
            return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }

        // Reset failed attempts on successful login
        if (failedLoginAttempts[userEmail]) {
            delete failedLoginAttempts[userEmail];
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        // Set token in HTTP-only cookie
        res.cookie('authToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 30 * 24 * 60 * 60 * 1000,  // 30 days
            sameSite: 'Strict',
        });

        res.json({ success: true, message: 'Login successful', token });
        console.log("User Email:", userEmail);
        console.log("Entered Password:", userPassword);
        console.log("Stored Hashed Password:", user.password);
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ success: false, message: 'Server error' });
    }


}




// function to track failed attempts
const trackFailedUserAttempts = (email) => {
    if(!failedLoginAttempts[email]) {
        failedLoginAttempts[email] = { count : 1, lockUntil: null }
    } else {
         failedLoginAttempts[email].count++
    }
    
    if(failedLoginAttempts[email].count >= 10) {
        failedLoginAttempts[email].lockUntil = Date.now() + 15 * 60 * 1000; // Lock for 15 minutes
    } 
}





export default UserLoginFunction