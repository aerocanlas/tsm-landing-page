import React from 'react'
import { Typography,  Grid, Box, Card, CardContent, Image, CardMedia } from '@mui/material'
import ResponsiveAppBar from './ResponsiveAppBar'
import { ThemeProvider, createTheme  } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveFooter from './ResponsiveFooter';
import { Route, Routes } from 'react-router';
import FAQs from './faqs';
import Button from '@mui/material/Button';

const App = () => {

  const theme = createTheme({
    palette: {
      background: {
        default: "white"
      }
    }
   });

  return (
    <>
       <ThemeProvider theme={theme}>
     <CssBaseline />
     <ResponsiveAppBar position="static" color="transparent"/>

    
 <Box
      component="img"
      sx={{
        maxHeight: 350, // Add this line
        maxWidth: 350, // Add this line
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '60px',
        marginLeft: '300px',
        marginBottom: '50px',
        minHeight: { xs: 233, md: 167, lg: 100 },
        minWidth: { xs: 350, md: 250, lg: 100 },
      }}
      alt="Pullover"
      src="/images/pullover.png"
      
    /> 

<Button 
 sx={{
 height: '60px', // Adjust as needed
 width: '60px', // Adjust as needed
 background: '#000000',
 marginLeft: '25%',
 borderRadius: '50%', // To make the button circular
 boxShadow: 'none', // Remove shadow
 '&:hover': {
  backgroundColor: 'rgba(0, 0, 0, 0.8)', 
  transition: '0.5s ease'
 },
 '&:active': {
  transform: 'scale(0.8)', // Shrink the button when clicked
 },
 }}
>
</Button>
<Button 
 sx={{
 height: '60px', // Adjust as needed
 width: '60px', // Adjust as needed
 background: '#54230e',
 marginLeft: '2%',
 borderRadius: '50%', // To make the button circular
 boxShadow: 'none', // Remove shadow
 '&:hover': {
  backgroundColor: 'rgba(84, 35, 14, 0.8)',
  transition: '0.5s ease'
 },
 '&:active': {
  transform: 'scale(0.8)', // Shrink the button when clicked
 },
 }}
>
</Button>
<Button 
 sx={{
 height: '60px', // Adjust as needed
 width: '60px', // Adjust as needed
 background: '#090050',
 marginLeft: '2%',
 borderRadius: '50%', // To make the button circular
 boxShadow: 'none', // Remove shadow
 '&:hover': {
  backgroundColor: 'rgba(9, 0, 80, 0.8)',
  transition: '0.5s ease'
 },
 '&:active': {
  transform: 'scale(0.8)', // Shrink the button when clicked
 },
 }}
>
</Button>
<Button 
 sx={{
 height: '60px', // Adjust as needed
 width: '60px', // Adjust as needed
 background: '#002b14',
 marginLeft: '2%',
 borderRadius: '50%', // To make the button circular
 boxShadow: 'none', // Remove shadow
 '&:hover': {
  backgroundColor: 'rgba(0, 43, 20, 0.8);', 
  transition: '0.5s ease'
 },
 '&:active': {
  transform: 'scale(0.8)', // Shrink the button when clicked
 },
 }}
>
</Button>
<Button 
 sx={{
 height: '60px', // Adjust as needed
 width: '60px', // Adjust as needed
 background: '#d8d8d8',
 marginLeft: '2%',
 borderRadius: '50%', // To make the button circular
 boxShadow: 'none', // Remove shadow
 '&:hover': {
  backgroundColor: 'rgba(216, 216, 216, 0.5)', 
  transition: '0.5s ease'
 },
 '&:active': {
  transform: 'scale(0.8)', // Shrink the button when clicked
 },
 }}
>
</Button>

<Typography 
      variant="h3" 
      gutterBottom 
      sx={{ 
        fontSize: '1em', 
        fontWeight: 'bold', 
        textAlign: 'right',
        marginRight: '40%',
        marginTop: '-25%',
        marginBottom: '40%'
      }}
  >
    Pullover
</Typography>

<Typography 
      variant="h3" 
      gutterBottom 
      sx={{ 
        fontSize: '0.8em',  
        textAlign: 'left',
        marginLeft: '55.3%',
        marginTop: '-39%',
        marginBottom: '40%',
        paddingRight: '16%',
      }}
      align="justify"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
</Typography>

<Typography 
      variant="h3" 
      gutterBottom 
      sx={{ 
        fontSize: '1em', 
        fontWeight: 'bold', 
        textAlign: 'right',
        marginRight: '39%',
        marginTop: '-35%',
        marginBottom: '40%',
        textDecoration: 'underline'
      }}
  >
    Cut & Sew
</Typography>

<Typography 
      variant="h3" 
      gutterBottom 
      sx={{ 
        fontSize: '1em', 
        fontWeight: 'bold', 
        textAlign: 'right',
        marginRight: '459px',
        marginTop: '-38%',
        marginBottom: '40%'
      }}
  >
    Silkscreen Printing
</Typography>

<Typography 
      variant="h3" 
      gutterBottom 
      sx={{ 
        fontSize: '1em', 
        fontWeight: 'bold', 
        textAlign: 'right',
        marginRight: '38.3%',
        marginTop: '-38%',
        marginBottom: '40%'
      }}
  >
    Embroidery
</Typography>
     <ResponsiveFooter position="bottom"/>
   </ThemeProvider>

</>
  )
}

export default App