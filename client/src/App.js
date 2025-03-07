

import React, {useState, useEffect, useContext} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navbar from './Components/ Navbar/ Navbar.jsx';
import TopHeader from './Components/TopHeader/TopHeader.jsx';
import Order from "./Pages/Order.jsx";
import StripePayment from "./Pages/StripePayment.jsx";
import OrderPlaced from "./Pages/OrderPlaced.jsx";
import Footer from './Components/ Footer/ Footer.jsx'
import SearchBar from "./Components/ SearchBar/ SearchBar.jsx";
import Logout from "./Pages/Logout.jsx";
import AuthNavbar from "./Components/AuthNavbar/AuthNavbar.jsx";
import { ShoeStoreContext } from "./Context/ShoeDataProvider.jsx";



function App() {
  const [authUser, setAuthUser] = useState(null);
  const {navigate} = useContext(ShoeStoreContext)



  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("http://localhost:3001/auth/authentication", {
          credentials: "include", // Ensures cookies are sent
        });

        const data = await response.json();
        if (data.authenticated) {
          setAuthUser(data.user); // Store authenticated user details
        } else {
          setAuthUser(null);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setAuthUser(null);
      }
    };

    checkAuthStatus();
  }, []);






  const authenticationLogout = () => {
      setAuthUser(null)
      navigate('/')
  }





  return (
   <>
        <div className="app-container">
      <TopHeader />
         { authUser ?    <AuthNavbar user={authUser} onLogout={authenticationLogout} /> :  <Navbar />   }

      <SearchBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/purchase" element={<Order />} />
          <Route path="/payment" element={<StripePayment />} />
          <Route path="/confirmation" element={<OrderPlaced />} />
          
        </Routes>
      </div>
      <Footer />
    </div>

   </>
  );
}






export default App;
