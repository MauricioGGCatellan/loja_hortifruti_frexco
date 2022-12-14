//Buttons from cart page.
//'+' and '-' modify quantity bought of a item, while persisting the information through session storage.
//'Remove item from cart' deletes a product entry completely and refreshes the page.

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

class CartButtons extends React.Component{ 
    constructor(props){
        let cart = JSON.parse(window.sessionStorage.getItem('cart'));
        super(props);
        this.state = {amount: cart[props.name]};
    } 

    render(){
        return(
        <Grid container alignItems="center">
            <Grid item>
                <Box sx={{ mt: 3, ml: 1, mb: 1, backgroundColor: "Gainsboro" }}>
                    <Button onClick={() => {
                        this.setState(function(state, props) {
                        if(state.amount === 1){
                            return {amount: 1}
                        } else{
                            let cart = JSON.parse(window.sessionStorage.getItem('cart'));
                            cart[props.name] -= 1;
                            window.sessionStorage.setItem('cart', JSON.stringify(cart));
                            return {
                                amount: state.amount - 1
                            };
                        }
                        })}}>
                        -
                    </Button>
                </Box>
            </Grid>
            <Grid item>
                <Typography gutterBottom sx={{ mt: 3, ml: 1, mb: 1, color: "RoyalBlue" }}>
                    {this.state.amount} 
                </Typography>
            </Grid>
            <Grid item>
                <Box sx={{ mt: 3, ml: 1, mb: 1, backgroundColor: "Gainsboro" }}>
                    <Button onClick={() => {this.setState(function(state, props) {
                        let cart = JSON.parse(window.sessionStorage.getItem('cart'));
                        cart[props.name] += 1;
                        window.sessionStorage.setItem('cart', JSON.stringify(cart));
                        return {
                            amount: state.amount + 1
                        };
                        })}}>
                        +
                    </Button>
                </Box> 
            </Grid>
            <Grid item>
                <Box sx={{ mt: 3, ml: 1, mb: 1, backgroundColor: "Gainsboro" }}>
                    <Button onClick={() => {
                        let cart = JSON.parse(window.sessionStorage.getItem('cart'));
                        delete cart[this.props.name]
                        window.sessionStorage.setItem('cart', JSON.stringify(cart));
                        window.location.reload();
                     }
                    }> 
                        Remove item from cart
                    </Button>
                </Box>
            </Grid>
        </Grid>
        );
    } 
}
 
export default CartButtons;