//Cart page view. Shows card items through component CartList (src/components/CartList.js)
//Cart items are saved via session storage.

import CartList from '../components/CartList';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function CartPage() {
  let navigate = useNavigate();
  
  return (
    <div>
      <CartList/> 
      <Grid container justifyContent="space-around">
        <Grid item> 
          <Button sx={{mt: 3, backgroundColor: "LightGreen", color: "Green"}} onClick={() => {navigate("/");}}>
              Keep buying  
          </Button>
        </Grid>
      </Grid>
    </div>
  );
} 
    
export default CartPage; 