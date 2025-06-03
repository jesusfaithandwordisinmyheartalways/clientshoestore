




import express from 'express';
import dotenv from 'dotenv'
import { resolve } from 'path';
import cors from 'cors'
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import registerRoutes from './routes/registerRoute.js'
import loginRoutes from './routes/loginRoute.js'
import reviewRoutes from './routes/reviewsRoute.js'
import orderRoutes from './routes/orderlRoute.js'
import stripeRoutes from './routes/stripeRoute.js'
import authenticationRoutes from './routes/authRoute.js'
import connectMongoDB from './configuration/mongodb.js'





dotenv.config();
console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY); // TEMP DEBUG LINE



const app = express()
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(helmet());




app.use('/user', registerRoutes)
app.use('/account', loginRoutes)
app.use('/feedback', reviewRoutes)
app.use('/orders', orderRoutes)
app.use('/stripe', stripeRoutes)
app.use('/auth', authenticationRoutes)


connectMongoDB()










//  Serve static files from the 'client' directory
app.use(express.static(process.env.STATIC_DIR));  // Serves static files like HTML, CSS, JS from the client folder



// Root endpoint (home page) that serves index.html
app.get("/payment", (req, res) => {
    // Resolve the file path to the index.html in the static folder
    const pathToFile = resolve(process.env.STATIC_DIR + "/index.html");
    res.sendFile(pathToFile);  // Send the index.html file to the client
  });



// Config endpoint that sends the Stripe public key to the client
app.get("/config", (req, res) => {
    // Send the Stripe publishable key to the client
    res.send({
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
  });
  




app.get('/', (req, res) => {
    res.end('backend server')
})






// Logout route
app.post('/logout/exit', (req, res) => {
  try {
      res.clearCookie('authToken'); // Clear JWT cookie
      return res.status(200).json({ message: 'Logged out successfully' });
  } catch (err) {
      console.error('Logout error:', err);
      return res.status(500).json({ message: 'Failed to log out. Please try again.' });
  }
});








const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is on port ${PORT}`);
});
