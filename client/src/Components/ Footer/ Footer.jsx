





import React from 'react'
import './ Footer.css'
import { Link } from 'react-router-dom'





const Footer = () => {



  return (
    <>

        <div className={'footer-container'}>

            <div className={'footer-wrapper'}>

                    <div><p>A simple company since 2010</p></div>
            </div>


            
            <div className={'footer-wrapper-two'}>
              <Link to="/articles" className='article-link'><div><span>Simple Articles</span></div></Link>
            </div>



            <div className={'footer-wrapper-three'}>

<div className={'footer-accordion'}>
    <button> Info</button>
    <div className={'footer-panel'}>
        <h4>About Us</h4>
        <h4>Size Chart</h4>
        <h4>Private Policy</h4>
    </div>
</div>

<div className={'footer-accordion'}>
    <button> Assistance</button>
    <div className={'footer-panel'}>
        <h4>Contact Us</h4>
        <h4>Change or cancel order</h4>
        <h4>Refund Policy</h4>
    </div>
</div>

<div className={'reach-out-footer'}>
    <button> Reach Out</button>
    <h4>Be the first to know about our latest deals, discounts and more!</h4>
    <h4>Events will be held on holidays and weekends</h4>
</div>

</div>






                    <div className={'copyright-wrapper'}>
                        <div><span>© Simple Sneakers</span></div>

                    </div>














          </div>














        





    </>
  )
}





export default  Footer
