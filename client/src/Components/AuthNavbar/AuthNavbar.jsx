





import React, { useContext, useEffect, useState } from "react";
import Menu from '../Menu/Menu'
import { Link } from "react-router-dom";
import { Menu as MenuIcon, Search, ShoppingCart } from 'lucide-react'; // Import icons
import { ShoeStoreContext } from "../../Context/ShoeDataProvider";
import './AuthNavbar.css'





const AuthNavbar = ({ user, onLogout }) => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [hoveredLink, setHoveredLink] = useState(null);
      const [navbarTransition, setNavbarTransition] = useState(false)
      const [toggleDarkMode, setToggleDarkMode] = useState(false)
      const [stickyNavbar, setStickyNavbar] = useState(false);
      const { TotalCartAmountItems, showSearch, setShowSearch, navigate } = useContext(ShoeStoreContext)

        
    
        useEffect(() => {
          setTimeout(() => {
            setNavbarTransition(true);
          }, 500);
        }, []);
      
        const handleScroll = () => {
          if (window.scrollY > 20) {
            setStickyNavbar(true);
          } else {
            setStickyNavbar(false);
          }
        };
      
        useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
    
    
    
      
      const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
      }
    
    
      const closeMenu = () => {
        setIsMenuOpen(false)
      }
    
    
    
      const toggleDarkAndLightMode = () => {
          setToggleDarkMode((current) => !current)
          document.body.classList.toggle('dark-mode')
      }
    
    




    

        return (
            <>


   {!showSearch && (
        <div className={`auth-navbar-container ${navbarTransition ? "show" : ""} ${stickyNavbar ? "sticky-navbar" : ""}`}>
          <div className="auth-navbar-wrapper">



            <div onClick={toggleMenu} className="auth-navbar-left-side-image"> <MenuIcon size={31} className="auth-menu-icon icon" /></div>


            <Link to="/" className="auth-navbar-login-header"> <h3>Simple Sneakers</h3></Link>



            <div className="auth-navbar-wrapper-right">
              <div onClick={() => { setShowSearch(true); navigate("/collection"); }}><Search size={31} className="icon" /></div>


              <Link to="/login" className="auth-name" onMouseEnter={() => setHoveredLink("login")} onMouseLeave={() => setHoveredLink(null)}>
                <div> <span className="user-auth-name">Hello:{ user.firstName || user.name} </span> </div>
                <span className={`tooltip ${hoveredLink === "login" ? "visible" : ""}`}>User Logged In</span>
              </Link>

              <Link to="/cart" onMouseEnter={() => setHoveredLink("cart")} onMouseLeave={() => setHoveredLink(null)}>
                <ShoppingCart size={31} className="icon" />
                <span className={`tooltip ${hoveredLink === "cart" ? "visible" : ""}`}>Cart</span>
              </Link>


              <div className="auth-navbar-cart-count"><span>{TotalCartAmountItems ? TotalCartAmountItems() : 0}</span> </div>

              <button onClick={toggleDarkAndLightMode} className="dark-mode-toggle">  {toggleDarkMode ? "☀️" : "🌙"} </button>



              <div className="logout-button"><button onClick={onLogout}>Logout</button></div>



            </div>












          </div>
        </div>
      )}





      {/* Menu Component */}
      <Menu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />









            </>
        )
}


export default AuthNavbar