Full Stack E-COMMERCE Shoe Store 
-Web / Mobile App Project (March 2025) MongoDB, Express & Node js, React, React lucide library 

Developed a secure full-stack shoe store e-commerce application with MongoDB, Node.js, and React, implementing JWT authentication, bcrypt password hashing, 
secure cookie storage, Stipe Payment Integration, user authentication, product display , cart, order checkout to enhance security and user experience. 
Mobile user design friendly.



Security Features:
	Password Hashing:
	•	Utilizes bcrypt to hash passwords before storing them in the database, enhancing security against password leaks.
	•	Input Validation with Regular Expressions:
	•	Implements regex validation for names, passwords, and emails to prevent malformed inputs and improve security.
	•	Duplicate Account Prevention:
	•	Checks if an email already exists in the database before allowing user registration, preventing duplicate accounts.
	•	Rate Limiting & Brute Force Protection:
	•	Tracks failed login attempts and locks users out after 10 incorrect tries, preventing brute-force attacks.
	•	Enforces a 15-minute lockout period after repeated failed attempts.
	•	JWT Authentication:
	•	Generates JSON Web Tokens (jwt.sign()) for authentication, securing user sessions.
	•	Sets tokens as HTTP-only cookies, preventing client-side JavaScript access and reducing the risk of XSS attacks.
	•	Uses sameSite: 'Strict' for cookies to prevent CSRF attacks.
	•	Configures cookies as secure: process.env.NODE_ENV === 'production', ensuring HTTPS usage.
	•	Server-Side Order Verification:
	•	Checks if an email is already associated with a previous order before placing a new one.
	•	Validates that the cart is not empty before proceeding with an order.
	•	CSRF Protection:
	•	Implements CSRF protection by setting a CSRF token cookie when users post reviews.
	•	Error Handling and Logging:
	•	Logs errors to help diagnose issues while preventing exposure of sensitive details to users.
	•	Use of Secure Database Connection:
	•	Connects to MongoDB using useNewUrlParser: true and useUnifiedTopology: true to avoid deprecated security risks.





Functionality Overview of Client:

General App Features
	•	User Authentication
	•	Fetches authentication status on app load.
	•	If authenticated, displays AuthNavbar, otherwise Navbar.
	•	Logs out the user and navigates back to the home page.
	•	Navigation & Routing
	•	Implements routes for different pages (Home, Collection, Product, Cart, etc.).
	•	SearchBar for product searches.
	•	Footer is displayed on all pages.

⸻

Product Page Features
	•	Product Display
	•	Retrieves product details based on the productId from the URL.
	•	Displays product image gallery and main product image.
	•	Shows product name, SKU number, old price, discounted price, and reviews.
	•	Product Selection
	•	Users can choose a size from a dropdown.
	•	Users can select a color from a dropdown.
	•	Add to Cart Functionality
	•	Validates if size and color are selected before adding to the cart.
	•	Adds selected product to the cart.
	•	Displays an alert confirming product addition.

⸻

Stripe Payment Features
	•	Fetching Stripe Configuration
	•	Retrieves the Stripe publishable key from the backend.
	•	Loads the Stripe instance for handling payments.
	•	Creating Payment Intent
	•	Sends a request to create a payment intent (with a hardcoded amount of $50.00).
	•	Stores the clientSecret for processing payments.
	•	Payment Form Handling
	•	Uses Stripe Elements to render a payment form.
	•	Passes the clientSecret to StripeCheckoutForm for payment processing.




 SCREENSHOTS:
 ![Screenshot 2025-03-07 at 16-34-37 React App](https://github.com/user-attachments/assets/4a652a69-05ee-4073-814e-9bb45fbc38f4)

![Mobile screenshot](https://github.com/user-attachments/assets/ba245960-b94a-4562-b248-73556365385d)




LINK TO PROJECT : 
https://clientshoestoreclient.onrender.com/




Contact:
Andrew Johnson
 
