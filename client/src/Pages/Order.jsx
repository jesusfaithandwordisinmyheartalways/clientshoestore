





import React, { useContext, useState, useEffect, useRef} from 'react'
import { ShoeStoreContext } from '../Context/ShoeDataProvider'
import './CSS/Order.css'
import { products } from '../Components/Arraydata/shoesdata'
import { ShoppingCart } from 'lucide-react'; // Import icons
import { Link } from "react-router-dom";





const Order = () => {
    const { navigate, TotalCartAmountItems, TotalCartAmount, setOriginalCartItems } = useContext(ShoeStoreContext)
    const currentInput = useRef();
    const [orderItems, setOrderItems] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
      });


      useEffect(() => {
        const orderCartItems = JSON.parse(localStorage.getItem('cartItems')) || {}
        const orderSelectedSizes = JSON.parse(localStorage.getItem('selectedSizes')) || {}
        const orderStoredColors = JSON.parse(localStorage.getItem('storedColors')) || {}

        let userOrders = []
        for(let data of products) {
            let productId = String(data._id)
            if(orderCartItems[productId] > 0) {
                userOrders.push({
                    id: productId,
                    name: data.name || 'name not found',
                    image: data.image[0] || '',
                    size: orderSelectedSizes[productId] || 'not selected',
                    color: orderStoredColors[productId]||  'not selected',
                    quantity: orderCartItems[productId]
                })
            }
        }
            setOrderItems(userOrders)
      }, [])








      const onUserChange = (event) => {
        const { name, value } = event.target;
        setFormData((currentData) => ({ ...currentData, [name]: value }));
      };








    const userOrderSubmit = async (e) => {
        e.preventDefault()
        const orderData = {
            orderName: formData.firstName,
            orderLastName: formData.lastName,
            orderEmail: formData.email,
            orderStreet: formData.street,
            orderCity:formData.city,
            orderState: formData.state,
            orderZipCode: formData.zipcode,
            orderCountry: formData.country,
            orderPhone: formData.phone,
            cart: orderItems
        }

        

        try {
            const response = await fetch('http://localhost:3001/orders/purchase', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(orderData),
            });
                const result = await response.json();
                if(response.ok) {
                   localStorage.removeItem('cartItems');  // Clear local storage
                   localStorage.removeItem("selectedSizes");
                   localStorage.removeItem("storedColors");
                   setOriginalCartItems({});  // Reset cart after order is placed
                   setTimeout(() => {        // ✅ Ensure update completes before navigating
                        navigate('/payment')
                   },300)
                } else {
                    setErrorMessage(result.message)
                }
         }catch(error) {
            console.error(error.message);
            setErrorMessage('Something went wrong. Please try again.');

        }

    }

 

      useEffect(() => {
        if (currentInput.current) {
          currentInput.current.focus();
        }
      }, []);






  return (
   <>

<div className="order-container">
    <div className="order-wrapper">


    

    <div className='order-right-side'>


            <div className='order-form'>   
                 <div><h3>User Delivery</h3></div>
                <div>
                <form onSubmit={userOrderSubmit}>
                    <div>
                    <input ref={currentInput} onChange={onUserChange} type="text" value={formData.firstName} placeholder="First Name" name="firstName" required />
                       <input onChange={onUserChange} type="text" value={formData.lastName} placeholder="Last Name" name="lastName" required />
                              <input onChange={onUserChange} type="email" value={formData.email} placeholder="Email" name="email" required />
                             <input onChange={onUserChange} type="text" value={formData.street} placeholder="Street" name="street" required />
                         <input onChange={onUserChange} type="text" value={formData.city} placeholder="City" name="city" required />
                    <input onChange={onUserChange} type="text" value={formData.state} placeholder="State" name="state" required />
                         <input onChange={onUserChange} type="text" value={formData.zipcode} placeholder="Zip Code" name="zipcode" required />
                                <input onChange={onUserChange} type="text" value={formData.country} placeholder="Country" name="country" required />
                         <input onChange={onUserChange} type="text" value={formData.phone} placeholder="Phone" name="phone" required />
                                <div> <button className='place-order-btn' type="submit">PAY NOW</button></div>
                            {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </div>
                </form>
                </div>

            </div>
            











    </div>












       <div className='order-left-side'>

          <div className='order-simple'>
             <div><h3>SIMPLE SNEAKERS</h3></div>
             <Link to="/cart"><div><ShoppingCart size={31} className="icon" /> </div></Link>
          </div>




           {orderItems.length > 0 ? (
            <div>
                {orderItems.map((data, index) => {
                    const product =  products.find((elements) => String(elements._id) === String(data._id));

                       return (
                        <div key={index} className="order-item">
                            <div><img src={data.image} alt=''></img></div>
                            <div className='order-quantity'><p>{data.quantity}</p></div>
                            <div className='order-name'><p>{data.name}</p></div>
                            <div className='order-price'></div>

                        </div>
                       )
                })}

                <div className='order-subtotal'>  
                    <div><p>Subtotal:<span>${TotalCartAmount().toFixed(2)}</span>   <span>({TotalCartAmountItems()} items) </span></p></div>
                 </div>


                 <div className='order-total'>
                 <div><p><span>USD</span>Total Amount: ${TotalCartAmount().toFixed(2)}</p></div>

                 </div>


            </div>

            


           ) : (
                <div>No items in your order.</div>
           )}




       </div>

        














    </div>

    </div>





   </>
  )

}






export default Order
