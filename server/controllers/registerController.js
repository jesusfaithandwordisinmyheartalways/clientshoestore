


import dotenv from 'dotenv';
import bcrypt from 'bcrypt'
import RegisterUser from '../models/registerModel.js';



dotenv.config(); 


const UserRegisterFunction = async (req, res) => {
   const { name, lastName, password, email } = req.body;
   const nameRegex = /^[a-zA-Z\s]{2,}$/;
   const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
   const emailRegex = /\S+@\S+\.\S+/;

   if (!nameRegex.test(name)) {
       return res.status(400).json({ success: false, message: 'Invalid name' });
   }
   if (!passwordRegex.test(password)) {
       return res.status(400).json({ success: false, message: 'Password must contain at least 8 characters, including a special character' });
   }
   if (!emailRegex.test(email)) {
       return res.status(400).json({ success: false, message: 'Invalid email format' });
   }

   try {
       const userExist = await RegisterUser.findOne({ email });
       if (userExist) {
           return res.status(400).json({ success: false, message: 'User Email already exists' });
       }

       const saltRounds = 10;
       const hashedPassword = await bcrypt.hash(password, saltRounds);  // Hashing password
       const newUser = new RegisterUser({ name, lastName, email, password: hashedPassword });
       await newUser.save();

       return res.status(201).json({ success: true, message: 'User Registration successful' });
   } catch (error) {
       console.error("Registration Error:", error);
       return res.status(500).json({ success: false, message: 'Server error' });
   }
}







export default UserRegisterFunction