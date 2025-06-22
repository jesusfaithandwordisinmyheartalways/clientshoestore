


import React, { useContext, useState, useRef, useEffect } from 'react';
import './CSS/Register.css'
import { ShoeStoreContext } from '../Context/ShoeDataProvider'





const Register = () => {
    const { navigate } = useContext(ShoeStoreContext)
        const register = useRef()
        const [name, setName] = useState("");
        const [lastName, setLastName] = useState("")
        const [password, setPassword] = useState("");
        const [email, setEmail] = useState("");
        const [error, setError] = useState("");


        const userRegister = async (e) => {
            e.preventDefault()
            const registerData = { name , lastName, password, email }
            try {
               const response = await fetch('https://clientshoestoreserver.onrender.com/user/register', {
                method: 'POST',
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(registerData),
               }) ;

                const data = await response.json()
                if(data.success) {
                    alert("You have Register");
                    navigate('/login')
                } else {
                    alert(data.message);
                }
                }catch(error) {
                    console.error("Register Error:", error);
                    setError("Something went wrong. Please try again.")
                
            }
        }




        useEffect(() => {
            const formContainer = document.querySelector('.register-form-container');
            if (formContainer) {
                formContainer.classList.add('show'); // Trigger the transition effect on page load
            }
    
            // Trigger the transition animation every time user visits the page
            const resetAnimation = () => {
                formContainer.classList.remove('show');
                void formContainer.offsetWidth; // Trigger reflow to restart animation
                formContainer.classList.add('show');
            }
    
            resetAnimation(); // Reset animation
    
            if (register.current) {
                register.current.focus();
            }
        }, []);





            useEffect(() => {
                if(register.current) {
                  register.current.focus()
                }
              }, [])




              




    
  return (
   <>


<div className={'register-form-container'}>
            <div className={'register-form-wrapper'}>
                <div className='register-login-form'>
                    <form onSubmit={userRegister}>
                        <div><h3>Register Account</h3></div>
                        <div>
                            <div><label>First Name</label></div>
                            <input onChange={(e) => setName(e.target.value)} ref={register} type='text' value={name} required />
                        </div>

                        <div>
                             <div><label>Last Name</label></div>
                            <input onChange={(e) => setLastName(e.target.value)} type='text' value={lastName} required />
                            </div>

                        <div>
                             <div><label>Password</label></div>
                            <input onChange={(e) => setPassword(e.target.value)} type='password' value={password} required />
                        </div>


                        <div>
                            <div><label>Email</label></div>
                          <input onChange={(e) => setEmail(e.target.value)} type='email' value={email} required />
                            </div>

                                  {error && <p style={{ color: 'red' }}>{error}</p>}
                                <div><button type='submit'>Create Account</button></div>



                                <div className='register'><a href="/login" onClick={(e) => {e.preventDefault(); navigate('/login')}}>Sign In</a></div>

                    </form>
                </div>








            </div>

        </div>









   </>
  )
}

export default Register
