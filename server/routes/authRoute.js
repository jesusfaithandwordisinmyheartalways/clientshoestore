



import express from 'express';
import userAuth from '../middleware/userAuth.js'



const router = express.Router()


// Protected route to check authentication status
router.get('/authentication', userAuth, (req, res) => {
    res.json({ authenticated: true, user: { name: req.user.name } });
  });






export default router;