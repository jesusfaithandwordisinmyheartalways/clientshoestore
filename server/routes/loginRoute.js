



import express from 'express';
import UserLoginFunction from '../controllers/loginController.js';


const router = express.Router()
router.post('/login', UserLoginFunction)



export default router;