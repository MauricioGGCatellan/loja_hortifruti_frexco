import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CartButtons from './CartButtons';

function CartItem(props) {
  return ( 
    <Box sx={{ width: '100%', bgcolor: 'LightPink' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              {props.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
              Free
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}> 
      </Box>
      <CartButtons name = {props.name}/>
      
    </Box>
  );
}


export default CartItem;