


import React, { useContext, useEffect, useState } from 'react';
import './CSS/Product.css'
import { useParams } from 'react-router-dom';
import { products } from '../Components/Arraydata/shoesdata.js';
import { ShoeStoreContext } from '../Context/ShoeDataProvider.jsx';
import Reviews from '../Components/Reviews/Reviews.jsx';




const Product = () => {
  const {productId, productName, productDescription} = useParams()
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('')
  const [accordionIsOpen, setAccordionIsOpen] = useState(false)
  const { AddCartItems, updateSelectedSize, updateSelectedColor,  } = useContext(ShoeStoreContext)


  const toggleAccordion = () => {
    setAccordionIsOpen(!accordionIsOpen);
  };




        const userSizeChange = (e) => {
          const newSize = e.target.value;
           setSize(newSize);
           if (productData) {
              updateSelectedSize(productData._id, newSize); // Update the size in context
          }
      
      };


      const userColorChange = (e) => {
        const newColor = e.target.value
        setColor(newColor)
        if(productData) {
          updateSelectedColor(productData._id, newColor)
        }
      }





      const UserCartAccess = () => {
        if (!size || size.trim() === '') {
          alert('Please select a size');
          return;
        }
      
        if (!color || color.trim() === '') {
          alert('Please select a color');
          return;
        }
      
        // Add the product to the cart
        AddCartItems(productData._id, size, color);
        alert("Product added to cart successfully!"); // Optional confirmation message
      };



      useEffect(() => {
        if (!productId || productId === 'undefined') {
          console.error('Error: productId is missing!');
          return;
        }
    
        const productFound = products.find((data) => String(data._id, data.name, data.description) === String(productId));
        if (productFound) {
          console.log('Found product:', productFound);
          setProductData(productFound);
          setImage(Array.isArray(productFound.image) ? productFound.image[0] : productFound.image);
        } else {
          console.error('Product not found');
        }
      }, [productId, productName, productDescription]);






  return productData ? (

            

          <div className="product-container">
              <div className="product-wrapper">


              <div className="top-left-main-image-wrapper">
                <div><img src={image} alt={productData.name}></img>
                </div>

                <div className='top-left-images'>
                  {productData.image.map((data, index) => (
                    <div key={index}>
                      <img onClick={() => setImage(data)} src={data} alt={productData.name} className="thumbnail" ></img>
                    </div>
                  ))}
                </div>



              </div>




              <div className="top-right-wrapper">
                   <div><h3>{productData.name}</h3></div>
                   <div className='sku-num'><p>{productData.SKU_NUMBER}</p></div>
                   <div className='product-price-wrapper'>
                      <div><p>${productData.oldprice.toFixed(2)}</p></div>
                      <div><span>${productData.price.toFixed(2)}</span></div>
                   </div>
                   <div className='product-review-wrapper'>
                      <div> <span className="star">&#9733;</span></div>
                       <div> <span className="star">&#9733;</span></div>
                       <div> <span className="star">&#9733;</span></div>
                       <div> <span className="star">&#9733;</span></div>
                       <div> <span className="star">&#9733;</span></div>
                       <div><p>3 Reviews</p></div>
                   </div>

                   <div className='product-shipping-wrapper'><p>Shipping Calculated at Checkout</p></div>

                   <div className='product-size-wrapper'><p>SIZE</p></div>

                   <div className="size-options-wrapper">
                   <select onChange={userSizeChange} value={size}>
                       <option value="">Select Size</option>
                             {productData.sizes.map((sizeOption) => (
                           <option key={sizeOption} value={sizeOption}> {sizeOption} </option>
                             ))}
                            </select>
                   </div>


                   <div className="color-wrapper"><p>Color</p></div>

                   <div className="color-options-wrapper">
                   <select onChange={userColorChange} value={color}>
                           <option value="">Select Color</option>
                             {productData.color.map((colorOption, index) => (
                           <option key={index} value={colorOption}>{ colorOption} </option>
                           ))}
                        </select>
                   </div>
                   

               



                   <div className='add-to-cart'><button onClick={UserCartAccess}> Add to Cart</button></div>



                   <div className='accordion-wrapper'>
                    <button className={`accordion ${accordionIsOpen ? 'active' : ''}`} onClick={toggleAccordion}>Description</button>
                        {accordionIsOpen && (
                          <div className={`panel ${accordionIsOpen ? "open" : ""}`}>
                          <div className='description-list'><h3>FIT GUIDE</h3></div>
                          <div className='description-list'><p>Runs true to size. </p></div>
                              <div>
                                <div className='description-list'><h3>DETAILS</h3></div>
                                <ul>
                                  <li className='description-list'>Premium leather uppers.</li>
                                  <li className='description-list' >Transparent Nylon Ripstop.</li>
                                  <li className='description-list'>Exposed Foam Tongue.</li>
                                </ul>
                              </div>
                              <div className='description-list'>
                                <p >A re-engineered, modern utilitarian take on our iconic simple sneaker</p>
                              </div>
                        </div>
                        )}
                   </div>




              </div>









              </div>





              <div>
                <Reviews />
              </div>




             

             




          </div>


  ) : (
        <div>Shoe Inventory not found</div>

  )
}



export default Product;