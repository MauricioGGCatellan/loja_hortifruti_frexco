import CartItem from './CartItem';
import Grid from '@mui/material/Grid';

function ProductsList(props) {
    console.log(props.fruits);

  return (  
    <Grid container columnSpacing={6} justifyContent="space-around">
     
    {props.fruits.map((fruit) => { 
        console.log(fruit); 
       return (
        <Grid item>
            <CartItem name = {fruit.name} family = {fruit.family}
             order = {fruit.order} genus = {fruit.genus} nutritions = {fruit.nutritions}/> 
        </Grid>
       );
    })}
    </Grid>
  );
}

export default ProductsList;