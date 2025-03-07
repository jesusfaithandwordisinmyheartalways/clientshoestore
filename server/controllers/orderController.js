



import dotenv from 'dotenv';
import OrderUser from '../models/orderModel.js';
import jsonWebToken from 'jsonwebtoken'
import express from 'express';



dotenv.config()

let backendOrders = []

const UserOrder = async (req, res) => {
        const { orderName, orderLastName, orderEmail, orderStreet, 
            orderState, orderCity, orderZipCode,  orderCountry, orderPhone, cart } = req.body;
    try {
              const emailOrderExist =  await OrderUser.findOne({ orderEmail })
              if(emailOrderExist) {
                return res.status(400).json({ success: false, message: 'the email was already place with a previous order'})
              }

              if(cart.length === 0 || !cart) {
                return res.status(400).json({ success: false,  message: 'please fill out cart'})
              }
                      // Save order to database
              const newOrderUser = new OrderUser({
                orderName,
                orderLastName,
                orderEmail,
                orderStreet,
                orderState,
                orderCity,
                orderZipCode,
                orderCountry,
                orderPhone,
                cart
              })

              backendOrders.push(newOrderUser)
              await newOrderUser.save()
              
              
              // Generate JWT token
              const authToken = jsonWebToken.sign({ orderName, orderLastName, orderStreet, orderState, orderCity, orderZipCode, orderCountry, orderPhone} ,
                    process.env.JWT_SECRET, {expiresIn: '365d'}
                )
                
                // Set token as a secure cookie
                res.cookie('authToken', authToken, {
                    httpOnly: true,
                    secure:true,
                    sameSite: 'Strict',
                    maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year expiration
                })
                res.json({ success: true, message: "Order placed successfully!", authToken})
            }catch(error) {
                console.error("Order Submission Error:", error);
                res.status(500).json({ success: false, message: "Internal Server Error" });
            }
        }






export default UserOrder