//Lists cart items. Each item found in storage is represented by a component CartItem (src/components/CartItem.js)

import CartItem from './CartItem';


function CartList(props) { 
  let cart;

  if(sessionStorage.getItem("cart") === null){
      cart = {};
  } else{
      cart = JSON.parse(window.sessionStorage.getItem("cart"));
  }
 
  return (  
    <div>
     
    {
    Object.keys(cart).map(function(key, index) {  
      console.log(key);
       return (
        
        <CartItem name = {key} />
      
       );
    })}
    </div> 
  );
}

export default CartList;