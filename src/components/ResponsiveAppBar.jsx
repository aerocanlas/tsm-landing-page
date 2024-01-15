import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  createTheme,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});


const Navbar = () => {
  const pages = ['Home', 'Contact', 'Community'];
  const pages1 = ['Wholesale', 'Retail'];
  const [open, setOpen] = useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = createTheme ({
    Typography: [
      'Arimo',
      'sans-serif',
    ].join(',')
  })

  return (
    <AppBar position="sticky" color="transparent" sx={{boxShadow: 'none', marginTop: '70px'}}>
      <StyledToolbar >
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },
           }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem component={Link}
                to={`/${page}`} key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
                ))}
                {pages1.map((page1) => (
                <MenuItem component={Link}
                to={`/${page1}`} key={page1} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page1}</Typography>
                </MenuItem>
                ))}
            </Menu>
          </Box>
          
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "flex" }, marginLeft: {lg: '80px', xl:'130px'}, marginRight: '-190px'}}>
        {pages.map((page) => (
              <Button
                component={Link}
                to={`/${page}`}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', textTransform: 'none' }}
              >
                {page}
              </Button>
            ))}
        </Typography>
        <Stack direction="column" spacing={0.2} 
        sx={{
        display: {xs: 'none', sm: 'none', lg: 'flex', xl: 'flex'}, 
        justifyContent: 'center', 
        alignItems: 'center',
        ml: {lg: '410px', xl: '650px'},
        mr: {lg: '300px', xl: '500px'}
        }}>
<Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'Arimo',
              fontWeight: 'bold',
              letterSpacing: '0px',
              color: 'black',
              fontSize: {xs: '18px', lg: '24px', xl: '28px'},
              textDecoration: 'none',
            }}
          >
            THE STREET MARKET <Typography variant="h6" sx={{ display: { xs: "flex", sm: "flex" }, fontSize: '8px', }}>TM</Typography>
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'Arimo',
              fontWeight: 400,
              letterSpacing: '0px',
              color: 'black',
              fontSize: '12px',
              textDecoration: 'none',
            }}
          >
GARMENT MANUFACTURER          
</Typography>
</Stack>
        {/* <Link to="/Home">
        <Box
      component="img"
      sx={{
        minHeight: { xs: 'none', md: 'none', lg: 45, xl: 45 }, // Add this line
        maxWidth: { xs: 'none', md: 'none', lg: 480, xl: 480 },// Add this line
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ml: { lg:'40px'}
      }}
      alt=""
      src="/images/TSM Logo.png"
    />   
    </Link>*/}
        {/* <Typography variant="h6" sx={{ display: { xs: "none", sm: "flex" }, fontFamily: 'Arimo', fontWeight: 500, color: 'black' }}>
          THE STREET MARKET <Typography variant="h6" sx={{ display: { xs: "none", sm: "flex" }, fontSize: '8px', }}>TM</Typography>
        </Typography> */}
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "flex" }, marginLeft: {lg: '10px', xl:'30px'}, marginRight: {lg: '150px', xl: '70px'} }}>
        {pages1.map((page1) => (
              <Button
              component={Link}
                to={`/${page1}`}
                key={page1}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', textTransform: 'none',
               }}
              >
                {page1}
              </Button>
            ))}
            </Typography>
            <Stack direction="column" spacing={0.2} 
            sx={{
            display: {xs: 'flex', sm: 'flex'},
            justifyContent: 'center',
            alignItems: 'center',
            position: "absolute",
            left: {xs:'110px', sm: '150px'}
            }}>
<Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 4,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Arimo',
              fontWeight: 'bold',
              letterSpacing: '0px',
              color: 'black',
              fontSize: '18px',
              textDecoration: 'none',
            }}
          >
            THE STREET MARKET <Typography variant="h6" sx={{ display: { xs: "flex", sm: "flex" }, fontSize: '8px', }}>TM</Typography>
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Arimo',
              fontWeight: 400,
              letterSpacing: '0px',
              color: 'black',
              fontSize: '12px',
              textDecoration: 'none',
            }}
          >
GARMENT MANUFACTURER          
</Typography>
</Stack>
      </StyledToolbar>
      
    </AppBar>
  );
};

export default Navbar;