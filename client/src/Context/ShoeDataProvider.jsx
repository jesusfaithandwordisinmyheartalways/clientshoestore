





import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from '../Components/Arraydata/shoesdata.js'


export const ShoeStoreContext = createContext(null)





const ShoeDataProvider = ({ children }) => {

  const OriginalCart = () => {
    const storedCart = localStorage.getItem("cartItems");
       if (storedCart) {
       return JSON.parse(storedCart); // Load cart data from localStorage
     } else {
       let cart = {};
         for (let i = 0; i < products.length + 1; i++) {
           cart[i] = 0;
         }
         return cart;
       }
      }


      


      const getStoredSizes = () => {
        const storedSizes = localStorage.getItem("selectedSizes");
        return storedSizes ? JSON.parse(storedSizes) : {};
    };

    
    const getStoredColors  = () => {
        const storedColors =  localStorage.getItem('storedColors')
        return storedColors ? JSON.parse(storedColors) : {}
    }



    const [originalCartItems, setOriginalCartItems] = useState(OriginalCart());
    const [selectedSizes, setSelectedSizes] = useState(getStoredSizes()); 
    const [selectedColor, setSelectedColor] = useState(getStoredColors())
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [count, setUserCount] = useState(1);
    const [orderItems, setOrderItems] = useState([]);
    const [inputIsClicked, setInputIsClicked] = useState(false)
    const [authentication, setAuthentication] = useState(null);
    const navigate = useNavigate();




    const updateLocalStorage = (cartItems) => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };


    const updateSizeStorage = (sizes) => {
      localStorage.setItem("selectedSizes", JSON.stringify(sizes));
  };


  const updateColorStorage = (color) => {
        localStorage.setItem('storedColors', JSON.stringify(color))
  }



  




  const updateSelectedSize = (itemId, size) => {
    setSelectedSizes((sizes) => {
        const updatedSizes = { ...sizes, [itemId]: size };
        updateSizeStorage(updatedSizes);
        return updatedSizes;
    });
};





const updateSelectedColor = (itemId, color) => {
  setSelectedColor((colors) => {
      const updatedColors = { ...colors, [itemId]: color };
      updateColorStorage(updatedColors);
      return updatedColors;
  });
};







const quantityIncrease = (productId) => {
  setOriginalCartItems((prevCart) => {
    const updatedCart = { ...prevCart, [productId]: (prevCart[productId] || 1) + 1 };
    updateLocalStorage(updatedCart);
    return updatedCart;
  });
};





const quantityDecrease = (productId) => {
  setOriginalCartItems((prevCart) => {
    const updatedCart = { ...prevCart, [productId]: Math.max(1, (prevCart[productId] || 1) - 1) };
    updateLocalStorage(updatedCart);
    return updatedCart;
  });
};











  const TotalCartAmountItems = () => {
    return Object.values(originalCartItems).reduce((total, quantity) => total + quantity, 0);

  }





  const TotalCartAmount = () => {
    let totalCartAmount = 0;
    for (const index in originalCartItems) {
        if (originalCartItems[index] > 0) {
            const product = products.find((product) => String(product._id) === String(index));
            if (product) {
                totalCartAmount += originalCartItems[index] * product.price; 
            }
        }
    }
    return totalCartAmount * count;


}




const AddCartItems = (productId, size, color) => {
  setOriginalCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]) {
          updatedCart[productId] += 1;  // Increase quantity of existing item
      } else {
          updatedCart[productId] = 1;  // Add new item to cart
      }
      updateLocalStorage(updatedCart);
      updateSizeStorage(updatedCart)
      updateColorStorage(updatedCart)
      return updatedCart;
  });
};




const RemoveCartItems = (productId) => {
  setOriginalCartItems((cartItems) => {
    const updatedCart = { ...cartItems };
    delete updatedCart[productId]; // Completely remove the item
    updateLocalStorage(updatedCart);
    return updatedCart;
  });

  setSelectedSizes((sizes) => {
    const updatedSizes = { ...sizes };
    delete updatedSizes[productId]; // Remove the size selection
    updateSizeStorage(updatedSizes);
    return updatedSizes;
  });

  setSelectedColor((colors) => {
    const updatedColors = { ...colors };
    delete updatedColors[productId]; // Remove the color selection
    updateColorStorage(updatedColors);
    return updatedColors;
  });
};





const inputNotClicked = () => {
  setInputIsClicked(prevState => !prevState);
  

}






const CheckoutOrderItems = () => {
  if (!inputIsClicked) {
    alert("You must agree with the terms and conditions to proceed.");
    return; 
  }



  let itemsToOrder = [];

  for (let product of products) {
      let productId = String(product._id);

      if (originalCartItems[productId] > 0) {
          // Ensure selectedSize and selectedColor are defined before using them
          let selectedSize = selectedSizes[productId] || "Not Selected";
          let selectedColors = selectedColor[productId] || "Not Selected";

          let item = {
              id: productId,
              name: product.name || "Unknown",
              image: product.image[0] || "",
              size: selectedSize, // Assign the selected size here
              color: selectedColors, // Assign the selected color here
              quantity: originalCartItems[productId],
              
          };

          itemsToOrder.push(item);
      }
  }

  // Update orderItems in localStorage and in the state at the same time
  setOrderItems(itemsToOrder);
  localStorage.setItem("orderItems", JSON.stringify(itemsToOrder));
  navigate("/purchase");



};









const ShoeStoreContextValue = {count, search,  setSearch, showSearch, setShowSearch,
   navigate, selectedSizes, setSelectedSizes, selectedColor, setSelectedColor,
  updateSelectedSize, updateLocalStorage, updateSelectedColor,  products, originalCartItems,
  setOriginalCartItems, TotalCartAmountItems, TotalCartAmount, quantityIncrease, quantityDecrease,
  AddCartItems, RemoveCartItems , orderItems, inputIsClicked, inputNotClicked,  
  setInputIsClicked, CheckoutOrderItems }





  return (
   <>

        <ShoeStoreContext.Provider value={ShoeStoreContextValue}>
              {children}
        </ShoeStoreContext.Provider>


   </>
  )
}



export default ShoeDataProvider
