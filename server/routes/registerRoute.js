



import express from 'express';
import UserRegisterFunction from '../controllers/registerController.js';


const router = express.Router()
router.post('/register', UserRegisterFunction)


export default router;