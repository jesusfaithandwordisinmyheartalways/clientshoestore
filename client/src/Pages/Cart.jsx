



import React, { useContext, useEffect, useState } from 'react';
import './CSS/Cart.css'
import { ShoeStoreContext } from '../Context/ShoeDataProvider.jsx'
import { products } from '../Components/Arraydata/shoesdata.js'




const Cart = () => {
   const { originalCartItems, 
    selectedSizes , 
    selectedColor,  
    TotalCartAmount, TotalCartAmountItems,
    RemoveCartItems, navigate,  
    quantityDecrease, quantityIncrease, inputIsClicked,  setInputIsClicked , CheckoutOrderItems } = useContext(ShoeStoreContext);




  




  



    useEffect(() => {
      console.log('original cart', originalCartItems)

   }, [originalCartItems])





   



   const isCartEmpty = Object.values(originalCartItems).every(quantity => quantity === 0);


 



  return (
    <>
              <div className='cart-container'>
                <div className='cart-wrapper'>
                    <div className='cart-top-section'>
                        <div><h3>CART</h3></div>
                    </div>

                    {isCartEmpty ? (
                        <p>Your cart is empty</p>
                    ) : (


                        <>
                            <div className='cart-top-section-two'>
                                <div><p>Product</p></div>
                                <div><p>Total</p></div>
                                <div><p>Remove</p></div>
                            </div>

                            <div className='second-hr'> <hr /></div>

                            {products.map((data) => (
                                originalCartItems[data._id] > 0 && (
                                    <div key={data._id} className='cart-top-section-three'>
                                        <div className='cart-image-section-main'>
                                            <div className='cart-image-section'>
                                                <div onClick={() => {navigate(`/product${data._id}`); window.scrollTo(0,0); }}>
                                                    <img src={data.image[0]} alt='' />
                                                </div>

                                                <div className='cart-size-section'>
                                                    <div>
                                                        <p>{data.name}</p>
                                                    </div>

                                                    <div className='size-two'>
                                                        <p> Size: {selectedSizes[data._id] || 'N/A'} </p>
                                                        <p> Color: {selectedColor[data._id] || 'N/A'} </p>
                                                    </div>
                                                </div>

                                                <div className='cart-quantity'>
                                                    <button onClick={() => quantityDecrease(data._id)}>-</button>
                                                    <span>{originalCartItems[data._id]}</span>
                                                    <button onClick={() => quantityIncrease(data._id)}>+</button>
                                                </div>

                                                <div className='cart-price-cart'><p>${data.price.toFixed(2)}</p></div>
                                                <div className='remove-items' onClick={() => RemoveCartItems(data._id)}><div>delete</div></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}

                            <div className='second-hr'> <hr /></div>

                            <div className='cart-subtotal-cart'>
                                <div>Subtotal:</div>
                                <div><p>${TotalCartAmount().toFixed(2)}</p></div>
                            </div>

                            <div className='cart-terms'>
                                <div className='terms-section'>
                                    <div><input onChange={() => setInputIsClicked(!inputIsClicked)} type='checkbox' checked={inputIsClicked} /></div>
                                    <div><label>Terms & Conditions</label></div>
                                </div>

                                <br />

                                <div>
                                    <button onClick={CheckoutOrderItems} disabled={!inputIsClicked}>CLIENT CHECKOUT <span>({TotalCartAmountItems()} items)</span> </button>
                                </div>
                            </div>
                        </>
                    )}






                </div>
            </div>


           









    </>
  )
}

export default Cart
