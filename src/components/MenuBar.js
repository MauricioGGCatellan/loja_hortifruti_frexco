import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import Menu from '@mui/material/Menu';
//import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
//import MenuItem from '@mui/material/MenuItem';
//import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products'];

const MenuBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenBuyout = (event) => {
    //Ir para a pagina do carrinho
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    //Ir para a pagina inicial
    setAnchorElNav(null);
  };

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
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'Green', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Check cart">
              <IconButton onClick={handleOpenBuyout} sx={{ p: 0 }}>
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