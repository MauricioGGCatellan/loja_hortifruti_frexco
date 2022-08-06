import CartItem from './CartItem';
import cart from '../models/cart';


function CartList(props) { 
  /*if(window.sessionStorage.getItem('cart')){
    cart = JSON.parse(window.sessionStorage.getItem('cart'));
  }*/
 
  return (  
    <div>
     
    {
    Object.keys(cart).map(function(key, index) {  
      console.log(key);
       return (
        
        <CartItem name = {key} quantity = {cart[key]}/>
      
       );
    })}
    </div> 
  );
}

export default CartList;