import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProductButtons from './ProductButtons';

function ProductItem(props) {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'LightPink' }}>
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
        <Typography color="text.secondary" variant="body2">
          {props.order} {props.family} {props.genus} 
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}> 
        <Typography gutterBottom variant="body1">
          Nutritional Information (per 100g)
        </Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 130,  bgcolor:'MistyRose'}} aria-label="caption table" >
        <TableBody>
            <TableRow key='Calories' >
              <TableCell component="th" scope="row">
                Calories
              </TableCell>
              <TableCell align="justify">{props.nutritions.calories}g</TableCell>
            </TableRow>
            <TableRow key='Carbohydrates'>
              <TableCell component="th" scope="row">
                Carbohydrates 
              </TableCell>
              <TableCell align="justify">{props.nutritions.carbohydrates}g</TableCell>
            </TableRow>
            <TableRow key='Protein'>
              <TableCell component="th" scope="row">
                Protein 
              </TableCell>
              <TableCell align="justify">{props.nutritions.protein}g</TableCell>
            </TableRow>
            <TableRow key='Fat'>
              <TableCell component="th" scope="row">
                Fat 
              </TableCell>
              <TableCell align="justify">{props.nutritions.fat}g</TableCell>
            </TableRow>
            <TableRow key='Sugar'>
              <TableCell component="th" scope="row">
                Sugar 
              </TableCell>
              <TableCell align="justify">{props.nutritions.sugar}g</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      </Box>
      <ProductButtons name = {props.name}/> 
    </Box>
  );
}


export default ProductItem;