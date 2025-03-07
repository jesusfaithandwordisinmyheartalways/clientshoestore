




import jwt from 'jsonwebtoken';
import RegisterUser from '../models/registerModel.js'



const userAuth = async (req, res, next) => {
  const token = req.cookies.authToken;
  if (!token) {
    return res.status(401).json({ authenticated: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Here, fetch user from the database (if necessary)
    const user = await RegisterUser.findById(decoded.id); // Make sure user is fetched from the database
    res.json({ authenticated: true, user: { name: user.name, firstName: user.firstName } }); // Send user info
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(403).json({ authenticated: false });
  }
};




export default userAuth;