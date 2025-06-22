





// authRoute.js
import express from 'express';
import userAuth from '../middleware/userAuth.js';

const router = express.Router();

router.get('/authentication', userAuth, (req, res) => {
  const { name, firstName } = req.user;
  res.json({ authenticated: true, user: { name, firstName } });
});

export default router;