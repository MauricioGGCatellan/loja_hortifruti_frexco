import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import cart from '../models/cart';
import { useNavigate } from 'react-router-dom';

class StatefulProductButtons extends React.Component{
    constructor(props){
        super(props);
        this.state = {amount: 0};
    }

    render(){
        return(
        <Grid container alignItems="center">
            <Grid item>
                <Box sx={{ mt: 3, ml: 1, mb: 1, backgroundColor: "Gainsboro" }}>
                    <Button onClick={() => {
                        this.setState(function(state, props) {
                        if(state.amount === 0){
                            return {amount: 0}
                        } 
                        return {
                            amount: state.amount - 1
                        };
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

                        if(this.state.amount > 0){
                        if(!cart[this.props.name]){ 
                            cart[this.props.name] = this.state.amount;
                        } else{
                            cart[this.props.name] += this.state.amount;
                        }
                        this.props.navigate('/cart');
                        }
                     }
                    }>
                        Add to cart
                    </Button>
                </Box>
            </Grid>
        </Grid>
        );
    }
}

function ProductButtons (props){
    let navigate = useNavigate();
    return <StatefulProductButtons name = {props.name} navigate = {navigate}/>
}

export default ProductButtons;