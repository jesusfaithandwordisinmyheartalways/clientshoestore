






import React, { useContext, useEffect, useState } from 'react'
import { ShoeStoreContext } from "../../Context/ShoeDataProvider";
import { Search } from 'lucide-react'; 
import { X } from "lucide-react";// Import icons
import { useLocation } from 'react-router-dom';
import { products } from '../Arraydata/shoesdata';
import './SearchBar.css'




const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShoeStoreContext)
    const [navbarVisible, setNavbarVisible] = useState(false)
    const location = useLocation();

    useEffect(() => {
        if(location.pathname.includes('collection')) {
            setNavbarVisible(true)
        } else {
            setNavbarVisible(false)

        }
    }, [location])







  return  showSearch && navbarVisible ? 
  (
 <>

        <div className={'search-input-container'}>
            <div className={'search-input-wrapper'}>

                <div className='input-user'>
                    <div>
                        <input value={search} onChange={(e) =>  setSearch(e.target.value)}
                         placeholder='Search Men, Women, Kid, Adult Shoes' ></input>
                         </div>

                    <div><Search size={28} className='search-icon' /></div>



                    <div className={'image-two'} onClick={() => setShowSearch(false)}>
                       <div ><X size={24} color="black" /></div>
                      </div>

                </div>

           \



            </div>
        </div>

 </>
  ) : null
}







export default SearchBar
