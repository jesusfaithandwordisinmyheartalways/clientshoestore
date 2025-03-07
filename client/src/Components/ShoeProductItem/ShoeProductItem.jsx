





import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ShoeProduct.css'



const ShoeProductItem = ({ _id, name, description, image, hoverImage, oldprice, price }) => {
    const [imageIsHovered, setImageIsHovered] = useState(false)


    const displayImage = Array.isArray(image) && image.length > 0 ? image[0] : image;



     // Function to convert product name to a URL-friendly slug
     const createSlug = (text) => {
      if (!text) return "";
      return text.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  };



  

 

    return (

   <>
        <div className={'shoe-product-item-container'}>

            <div className={'shoe-product-wrapper'}>
            <Link to={`/product/${_id}/${name}/${description}`} onClick={() => window.scrollTo(0,0)} >
              <div><img alt={name} onMouseOver={() => setImageIsHovered(true)}
               onMouseOut={() => setImageIsHovered(false)}  src={imageIsHovered && hoverImage ? hoverImage : displayImage}  >
               </img></div>
               </Link>


               <div className='name'><p>{name}</p></div>

               <div className='price-wrapper'>
               <p><span>${oldprice.toFixed(2)}</span> ${price.toFixed(2)}</p>
               </div>


               <div className={'review-image'}>
                 <div> <span className="star">&#9733;</span></div>
                 <div> <span className="star">&#9733;</span></div>
                 <div> <span className="star">&#9733;</span></div>
                 <div> <span className="star">&#9733;</span></div>
                 <div> <span className="star">&#9733;</span></div>
                <div><p>3 Reviews</p></div>
                </div>




               </div>
            </div>

   </>
  )
}

export default ShoeProductItem
