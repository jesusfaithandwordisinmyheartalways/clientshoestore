


import React, { useContext, useEffect, useState } from 'react'
import './CSS/Collection.css'
import { products } from '../Components/Arraydata/shoesdata'
import ShoeProductItem from '../Components/ShoeProductItem/ShoeProductItem'
import { ShoeStoreContext } from '../Context/ShoeDataProvider'
import { Link } from "react-router-dom";








const Collection = () => {
  const { search } = useContext(ShoeStoreContext)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
   const [sortType, setSortType] = useState('relevant');


   const categoryChange = (event) => {
    const { value } = event.target;
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const subCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedSubCategories((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };




  useEffect(() => {
    let updatedProducts = products;

     // Filter by search query
if (search.trim() !== '') {
  updatedProducts = updatedProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
  );
}

// Filter by categories
if (selectedCategories.length > 0) {
  updatedProducts = updatedProducts.filter((product) =>
      selectedCategories.includes(product.category)
  );
}

// Filter by subcategories
if (selectedSubCategories.length > 0) {
  updatedProducts = updatedProducts.filter((product) =>
      selectedSubCategories.includes(product.subCategory)
  );
}

// Apply sorting
if (sortType === 'low-high') {
  updatedProducts.sort((a, b) => a.price - b.price);
} else if (sortType === 'high-low') {
  updatedProducts.sort((a, b) => b.price - a.price);
}

    setFilteredProducts(updatedProducts);
  }, [search, selectedCategories, selectedSubCategories, sortType]);




  useEffect(() => {
    let sortedProducts = [...filteredProducts];

    if (sortType === 'low-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  }, [sortType]);







   return (
    <>
        <div className={'collection-container'}>

          <div className='wrapper-left'>


                   <div className={'select'}>
                       <select onChange={(e) => setSortType(e.target.value)}>
                           <option value='relevant'>Sort by: Relevant</option>
                           <option value='low-high'>Sort by: Low to High</option>
                           <option value='high-low'>Sort by: High to Low</option>
                        </select>
                        </div>


                        <div>
                          <div><h3>SHOE INVENTORY</h3></div>
                        </div>


                        <div>
                          <div><h3>OPTIONS</h3></div>
                        </div>





          </div>
        </div>






        <div className={'collection-container-two'}>

        <div className='right-side-wrapper'>
       
                          
       <div className={'CATEGORIES'}>
       <div><h3>CATEGORIES</h3></div>
        <div className='categories-wrapper'>

          <div>
         <label>Men<input onChange={categoryChange} type='checkbox' value='Men'></input></label>
        </div>  

        <div>
        <label>Women<input onChange={categoryChange} type='checkbox' value='Women'></input></label>
         </div>
        <div>
        <label>Kid<input onChange={categoryChange} type='checkbox' value='Kid'></input></label>
        </div>

        <div>
        <label>Adult<input onChange={categoryChange} type='checkbox' value='Adult'></input></label>
        </div>


        </div>
       </div>
 
 
 
       <div className={'TYPE'}>
       <div><h3>TYPE</h3></div>
        <div className={'type-wrapper'}>
          <div>
           <label> Men Shoes<input onChange={subCategoryChange} type='checkbox' value='Men Shoes'></input></label>
        </div>
     <div>
         <label>Women Shoes<input onChange={subCategoryChange} type='checkbox' value='Women Shoes'></input></label>
     </div>
      <div>
        <label>Kid Shoes<input onChange={subCategoryChange} type='checkbox' value='Kid Shoes'></input></label>
     </div>

     <div>
        <label>Adult Shoes<input onChange={subCategoryChange} type='checkbox' value='Adult Shoes'></input></label>
     </div>

        </div>
       </div>


 
 </div>
 




      <div className='middle-wrapper'>
      {filteredProducts.map((product) => (
          <div key={product._id} className='product-card'>
            <Link to={`/product/${product._id}`} className='collection-link'>
              <img src={product.image[0]} alt={product.name} />
              <div><p>{product.name}</p></div>
                <div className='collection-price'>
                  <div>$<span className='old-price'>{product.oldprice.toFixed(2)}</span></div>
                   <div><span>${product.price.toFixed(2)}</span></div>
                </div>
            </Link>
          </div>
        ))}

      </div>

       
       
       
        </div>





    </>
  )
}






export default Collection
