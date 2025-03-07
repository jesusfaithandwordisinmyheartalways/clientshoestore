


import React, { useState, useEffect } from 'react';
import './PopularShoes.css'
import ShoeProductItem from '../ShoeProductItem/ShoeProductItem.jsx';
import { products } from '../Arraydata/shoesdata.js'

const PopularShoes = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.querySelector('.popular-shoe-container');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);



  

  return (
    <div className={`popular-shoe-container ${hasAnimated ? 'animated' : ''}`}>
      <div className={'popular-shoe-wrapper'}>
        <div><h3>Popular Shoes</h3></div>
      </div>

      <div className={'popular-shoe-wrapper-two'}>
        <div><p>SAVE 25%</p></div>
        <div><p>SAVE 25%</p></div>
        <div><p>SAVE 25%</p></div>
      </div>

      <div className={'popular-shoe-wrapper-three'}>
        {products.slice(3, 6).map((data) => (
          <div key={data._id}>
            <ShoeProductItem _id={data._id} image={data.image} name={data.name}
              hoverImage={data.hoverImage}
              oldprice={data.oldprice}
              price={data.price}
              description={data.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularShoes;