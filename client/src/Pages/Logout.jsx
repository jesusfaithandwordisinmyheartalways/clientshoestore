




import React, { useContext, useState } from 'react'
import './CSS/Logout.css'
import { ShoeStoreContext } from '../Context/ShoeDataProvider'



const Logout = ({ onLogout}) => {
    
    const { setOriginalCartItems, navigate } = useContext(ShoeStoreContext)
    const [error, setErrorMessage] = useState('')




    const userLogout = async (e) => {
        e.preventDefault(); 

        try {
             const response = await fetch('https://clientshoestoreserver.onrender.com/logout/exit', {
                method: 'POST',
                credentials: 'include',  
             });
              const result = await response.json();
              if(response.status === 200 && result.message === 'Logged out successfully') {
                localStorage.removeItem('cartItems');  // Clear local storage
                localStorage.removeItem("selectedSizes");
                localStorage.removeItem("storedColors");
                setOriginalCartItems({});  // Reset cart after order is placed
                console.log(result.message);
                onLogout()  // Update authUser state in parent (App component)
                setTimeout(() => {        // ✅ Ensure update completes before navigating
                     navigate('/')
                },300)
              }else {
                console.error('Logout failed');
                setErrorMessage('Error during logout. Please try again.');
              }
        }catch(error) {
            console.error('Error:', error);
            setErrorMessage('Network error. Please try again later.');


        }
    }



  return (
   <>



<div className={'logout-form-container'}>

<div className={'logout-form-wrapper'}>

    <div>
        <form onSubmit={userLogout} >
            <div><h3>SIGN OUT</h3></div>

            <div><button type="submit">Logout</button></div>
                {error && <p style={{color: 'red'}}>{error}</p>}


        </form>

    </div>





</div>
</div>




   </>
  )
}

export default Logout
