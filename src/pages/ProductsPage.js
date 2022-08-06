//Products page view. Calls API to get products, and shows them through component ProductList (src/components/ProductsList.js)

import React, { useState, useEffect }  from 'react';
import ProductsList from '../components/ProductsList';


function ProductsPage() { 
  const [fruits, setFruits] = useState([]);

  useEffect(() => {  
    fetch('https://serene-forest-52543.herokuapp.com/https://www.fruityvice.com/api/fruit/all')     
      .then(response => response.json()) 
      .then((data) => 
            {
            console.log(data);
            setFruits(data);
          }
      )  
      .catch((err) => { 
        console.log(err.message); 
      });
    }, []);


  return (
    <div>  
      <ProductsList fruits = {fruits}></ProductsList>
    </div>
  );
} 

export default ProductsPage;
