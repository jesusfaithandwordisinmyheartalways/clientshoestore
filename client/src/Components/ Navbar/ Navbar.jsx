



import React, { useContext, useEffect, useState } from "react";
import '../ Navbar/ Navbar.css'
import Menu from '../Menu/Menu'
import { Link } from "react-router-dom";
import { Menu as MenuIcon, Search, User, ShoppingCart } from 'lucide-react'; // Import icons
import { ShoeStoreContext } from "../../Context/ShoeDataProvider";





const  Navbar = () => {
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
        <div className={`navbar-container ${navbarTransition ? "show" : ""} ${stickyNavbar ? "sticky-navbar" : ""}`}>
          <div className="navbar-wrapper">
            <div onClick={toggleMenu} className="left-side-image">
              <MenuIcon size={31} className="icon"  />
            </div>

            <Link to="/" className="login-header">
              <h3>Simple Sneakers</h3>
            </Link>

            <div className="navbar-wrapper-right">
              <div onClick={() => { setShowSearch(true); navigate("/collection"); }} >
                <Search size={31} className="icon"  />
              </div>

              <Link to="/login" onMouseEnter={() => setHoveredLink("login")} onMouseLeave={() => setHoveredLink(null)} >
                <User  size={31} className="icon" />
                <span className={`tooltip ${hoveredLink === "login" ? "visible" : ""}`}>Login</span>
              </Link>

              <Link to="/cart" onMouseEnter={() => setHoveredLink("cart")} onMouseLeave={() => setHoveredLink(null)} data-testid="cart-icon">
                <ShoppingCart size={31} className="icon"  />
                <span className={`tooltip ${hoveredLink === "cart" ? "visible" : ""}`}>Cart</span>
              </Link>

              <div className="cart-count"><span>{TotalCartAmountItems ? TotalCartAmountItems() : 0}</span> </div>

              <button onClick={toggleDarkAndLightMode} className="dark-mode-toggle" id="img-dark">{toggleDarkMode ? "☀️" : "🌙"}  </button>
            </div>




          </div>
        </div>
      )}

      {/* Menu Component */}
      <Menu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />


  </>




  );
};


export default  Navbar
