import MenuBar from '../components/MenuBar'
import React, { useState, useEffect }  from 'react';
import ProductsList from '../components/ProductsList';


function ProductsPage() { 
  const [fruits, setFruits] = useState([]);

  useEffect(() => {  
    // data fetching here
    fetch('https://serene-forest-52543.herokuapp.com/https://www.fruityvice.com/api/fruit/all')     
      .then(response => response.json()) 
      .then((data) => 
            {console.log(data);
            setFruits(data);
          }
      )  
      .catch((err) => { 
        console.log(err.message); 
      });
    }, []);



    
  return (
    <div> 
      <MenuBar></MenuBar>
      <ProductsList fruits = {fruits}></ProductsList>
    </div>
    //<header><div> Hortifruti Frexco </div> </header>
    //<Button variant="contained"> Olá Mundo</Button>
  );
}

export default ProductsPage;
