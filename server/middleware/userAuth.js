




import jwt from 'jsonwebtoken';
import RegisterUser from '../models/registerModel.js';

const userAuth = async (req, res, next) => {
  const token = req.cookies.authToken;
  if (!token) {
    return res.status(401).json({ authenticated: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await RegisterUser.findById(decoded.id);
    if (!user) throw new Error("User not found");

    req.user = user; // Attach user info to req object
    next(); // Pass control to next middleware or route handler
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(403).json({ authenticated: false });
  }
};

export default userAuth;  