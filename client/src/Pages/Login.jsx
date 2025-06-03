



import React, { useContext, useState , useRef, useEffect} from 'react'
import { ShoeStoreContext } from '../Context/ShoeDataProvider'
import './CSS/Login.css'


const Login = () => {
    const { navigate, setLoginStatus  } = useContext(ShoeStoreContext)
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const login = useRef()



    const userLogin = async (e) => {
            e.preventDefault()

            const loginData = {
                userPassword: password,
                userEmail: email
            }

            if (!password || !email) {
                setError("Please enter both email and password.");
                return;
            }

            try {
                const response = await fetch('https://clientshoestoreserver.onrender.com/account/login', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json",},
                    credentials: 'include',
                    body: JSON.stringify(loginData),
                });
                  const data = await response.json()
                  if(data.success) {
                  
                    alert("Login successful");
                    navigate("/")
                  } else {
                    alert(data.message);
                  }
                }catch(error) {
                    console.error("user Error:", error);
                    alert("Something went wrong. Please try again.");

            }
    }   




    useEffect(() => {
        const formContainer = document.querySelector('.login-form-container');
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

        if (login.current) {
            login.current.focus();
        }
    }, []);




  return (
   <>
     





        <div className={'login-form-container'}>

            <div className={'login-form-wrapper'}>

                <div>
                    <form onSubmit={userLogin}>
                        <div><h3>LOGIN</h3></div>

                        <div>
                             <div><label>Password</label></div>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" ref={login} value={password} required></input>
                        </div>

                        <div>
                          <div> <label>Email</label></div>
                          <input onChange={(e) => setEmail(e.target.value)} type="email" value={email} required></input>
                        </div>
                                {error && <p style={{ color: 'red' }}>{error}</p>}

                        <div><button type="submit">Sign In</button></div>


                        <div className='register'><a href="/register" onClick={(e) => {e.preventDefault(); navigate('/register')}}>Create Account</a></div>

                    </form>

                </div>






            </div>



        </div>










   </>
  )
}

export default Login
