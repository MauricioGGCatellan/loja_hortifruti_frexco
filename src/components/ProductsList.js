//Lists all products received from API. 
//They are presented in a grid, with each individual item being described by ProductItem component (src/components/ProductItem.js)

import ProductItem from './ProductItem';
import Grid from '@mui/material/Grid';

function ProductsList(props) {
    console.log(props.fruits);

  return (  
    <Grid container columnSpacing={6} justifyContent="space-around">
     
    {props.fruits.map((fruit) => { 
        console.log(fruit); 
       return (
        <Grid item>
            <ProductItem name = {fruit.name} family = {fruit.family}
             order = {fruit.order} genus = {fruit.genus} nutritions = {fruit.nutritions}/> 
        </Grid>
       );
    })}
    </Grid>
  );
}

export default ProductsList;