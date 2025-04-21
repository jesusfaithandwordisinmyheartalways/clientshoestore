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
	•	User Authentication | Dark Toggle
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





 

Full page





![Full page](https://github.com/user-attachments/assets/f4b10979-bf9d-4ac2-b3ae-b719b0e2eb62)







Side Menu:








![sidemenu image](https://github.com/user-attachments/assets/539519c4-3c9a-45e6-ac21-3ee89009acb0)







 

Dark toggle Page







![Dark toggle](https://github.com/user-attachments/assets/94a8e6ac-547c-4a54-89ad-cd7c72c64dfc)













 Cart Page






 
 ![Cart page](https://github.com/user-attachments/assets/4b5930ab-195a-499d-8bfe-831523628d4f)














Dark toggle Product Page:







![Dark toggle product page](https://github.com/user-attachments/assets/9b2a66c7-9e17-4c52-9b6e-fa28e2a4d23a)
















Purchase Page:





![Purchase page](https://github.com/user-attachments/assets/d9e8f380-26c2-40d5-90d0-dc14c01e4f0b)

















Mobile Page:





![mobile](https://github.com/user-attachments/assets/0948d48c-4d90-48c9-bef4-0e8b782aad75)
















LINK TO PROJECT : 
https://clientshoestoreclient.onrender.com/




Contact:
Andrew Johnson
 
