//Cart page view. Shows card items through component CartList (src/components/CartList.js)
//Cart items are saved via session storage.

import CartList from '../components/CartList'

function CartPage() {
  
  return (
    <div>
      <CartList/>
    </div>

  );
}

export default CartPage; 