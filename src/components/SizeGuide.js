import React from 'react'
import { Typography, Grid, Box, Card, CardContent, Image, CardMedia, } from '@mui/material'
import ResponsiveAppBar from './ResponsiveAppBar'
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from '@mui/material/Toolbar';
import ResponsiveFooter from './ResponsiveFooter';
import { Route, Routes } from 'react-router';
import FAQs from './faqs';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const App = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#ffffff', 
    boxShadow: 'none', 
    outline: 'none',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const itemData = [
    {
      img: '/images/Hoodie-2.png',
      title: 'Hoodie',

    },
    {
      img: '/images/Pullover-1.png',
      title: 'Pullover',
    },
    {
      img: '/images/Skater-Fit.png',
      title: 'Skater Fit',
    },
    {
      img: '/images/Sweat-Pants.png',
      title: 'Sweat Pants',
    },
    {
      img: '/images/Sweat-Shorts.png',
      title: 'Sweat Shorts',
    },
  ];
    let theme = createTheme({
        palette: {
          background: {
            default: "#ffffff"
          }
        }
       });
       
       theme = responsiveFontSizes(theme);
       

  return (
    <>
    <title>The Street Market | Size Guide </title>
    <ThemeProvider theme={theme}>
     <CssBaseline />
     <ResponsiveAppBar position="static" color="transparent">
   </ResponsiveAppBar>

   <Typography 
      variant="h3" 
      gutterBottom 
      sx={{ 
        fontSize: { xs: '0.9em', sm: '1rem', md: '1rem', lg: '1rem', xl: '1.2rem' }, 
        textAlign: 'center', 
        marginTop: { xs: '-320px', sm: '100px', md: '-70px', lg: '100px', xl: '-50px' }, // Adjust as needed
        marginBottom: { xs: '50px', sm: '', md: '30px', lg: '90px' }
      }}
  >
SIZE GUIDE
</Typography>
<Stack direction="row" spacing={2} sx={{
  marginTop: {xs: '0px', xl: '120px'},
  marginLeft: {xs: '20px', lg: '110px'},
  marginRight: {xs: '20px', lg: '100px'}
  
}}>
  
        <Item>
        <Box
      component="img"
      sx={{
        backgroundColor: '#ffffff', boxShadow: 'none', outline: 'none',
        minHeight: { xs: 350, md: 250, lg: 350, xl: 300 }, // Add this line
        maxWidth: { xs: 350, md: 250, lg: 350, xl: 300 },// Add this line
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      }}
      alt=""
      src="/images/Hoodie-2.png"
    />  
        </Item>
        <Link to="/Pullover">
        <Item>
          
        <Box
      component="img"
      sx={{
        minHeight: { xs: 350, md: 250, lg: 350, xl: 300 }, // Add this line
        maxWidth: { xs: 350, md: 250, lg: 350, xl: 300 },// Add this line
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      }}
      alt=""
      src="/images/Pullover-1.png"
    />
     
        </Item>
        </Link> 
        <Item>
        <Box
      component="img"
      sx={{
        minHeight: { xs: 350, md: 250, lg: 350, xl: 300 }, // Add this line
        maxWidth: { xs: 350, md: 250, lg: 350, xl: 300 },// Add this line
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      }}
      alt=""
      src="/images/Skater-Fit.png"
    />  
        </Item>
      </Stack>

      <Stack direction="row" spacing={2} sx={{
  marginTop: {xs: '0px', xl: '120px'},
  marginBottom: {xs: '0px', lg: '100px', xl: '120px'},
  marginLeft: {xs: '20px', lg: '110px'},
  marginRight: {xs: '20px', lg: '100px'}
  
}}>
      <Item>
        <Box
      component="img"
      sx={{
        minHeight: { xs: 350, md: 250, lg: 350, xl: 300 }, // Add this line
        maxWidth: { xs: 350, md: 250, lg: 350, xl: 300 },// Add this line
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      }}
      alt=""
      src="/images/Sweat-Pants.png"
    />  
        </Item>
        <Item>
        <Box
      component="img"
      sx={{
        minHeight: { xs: 350, md: 250, lg: 350, xl: 300 }, // Add this line
        maxWidth: { xs: 350, md: 250, lg: 350, xl: 300 },// Add this line
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      }}
      alt=""
      src="/images/Sweat-Shorts.png"
    />  
        </Item>
</Stack>
   <ResponsiveFooter position="bottom"/>
   </ThemeProvider>
</>
  )
}

export default App