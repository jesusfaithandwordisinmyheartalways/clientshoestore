




import React, { useEffect } from 'react';
import './Menu.css'
import { Link } from "react-router-dom";
import { image_logo } from '../Arraydata/logodata.js';



const Menu = ({ isMenuOpen, closeMenu }) => {


    useEffect(() => {
        if (isMenuOpen) {
          // Disable vertical scrolling and apply light shadow
          document.body.style.overflowY = "hidden";
        } else {
          // Enable vertical scrolling and revert body to normal color
          document.body.style.overflowY = "auto";
        }
    
        // Cleanup on component unmount
        return () => {
          document.body.style.overflowY = "auto";
        };
      }, [isMenuOpen]);
    



  return (
    <>


        <div className={`navbar-menu-container ${isMenuOpen ? 'open' : "" } `} onClick={closeMenu}>

            <div  className="navbar-menu-content" onClick={(e) => e.stopPropagation()}>
            
                <div className="close-btn"><button onClick={closeMenu}>X</button></div>


                <div className="navbar-menu-wrapper">
                    <Link className="navbar-link" to="/login" onClick={closeMenu}> Log In</Link>
                    <Link className="navbar-link" to="/collection" onClick={closeMenu}> Collection</Link>
                     <Link className="navbar-link" to="/" onClick={closeMenu}> Home</Link>
                     <Link className="navbar-link" to="/logout" onClick={closeMenu}> Logout</Link>

                </div>



                <div className="navbar-menu-icon-wrapper">
                    <div><img src={image_logo.youtube_logo} alt=''></img></div>
                    <div><img src={image_logo.instagram_logo} alt=''></img></div>
                    
                </div>


            </div>



            </div>





   





    </>
  )
}

export default Menu
