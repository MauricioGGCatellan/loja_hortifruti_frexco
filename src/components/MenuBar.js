//Top bar for all pages.
//'Product' directs to product page, and cart symbol directs to cart page.

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';


const pages = ['Products'];

const MenuBar = () => {
  let navigate = useNavigate();

  return (
    <AppBar position="static" style={{ background: 'LightGreen' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            //component="a"
            //href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1.5rem',
              color:'DarkGreen',
              textDecoration: 'none',
            }}
          >
            Hortifruti Frexco
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {navigate("/")}}
                sx={{ my: 2, color: 'Green', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> 

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Check cart">
              <IconButton onClick={() => {navigate("/cart")}} sx={{ p: 0 }}>
                <ShoppingCart sx = {{color: 'Green'}}/>
              </IconButton>
            </Tooltip>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MenuBar;