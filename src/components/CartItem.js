import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function ProductItem() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'LightPink' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              Queijo
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
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button>Remove</Button>
      </Box>
    </Box>
  );
}


export default ProductItem;