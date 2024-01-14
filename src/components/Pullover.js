import React, { useState } from 'react';
import { Typography,  Grid, Box, Card, CardContent, Image, CardMedia } from '@mui/material'
import ResponsiveAppBar from './ResponsiveAppBar'
import { ThemeProvider, createTheme  } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveFooter from './ResponsiveFooter';
import { Route, Routes } from 'react-router';
import FAQs from './faqs';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import ReactImageMagnify from 'react-image-magnify';

const App = () => {
  const [isClicked, setIsClicked] = useState([false, false, false, false]);
  const [selectedImage, setSelectedImage] = useState("/images/pullover.png");
  const [marginLeft, setMarginLeft] = useState('350px');

  const handleClick = (index, imageSrc, margin) => {
    setIsClicked((prevState) => {
    const newState = prevState.map((_, i) => i === index);
    setSelectedImage(imageSrc);
    setMarginLeft(margin);
    return newState;
    });
   };
   
   

  const theme = createTheme({
    palette: {
      background: {
        default: "white"
      }
    },
    Typography: [
      'Arimo',
      'sans-serif',
    ].join(',')
   });

  return (
    <>
       <ThemeProvider theme={theme}>
     <CssBaseline />
     <ResponsiveAppBar position="static" color="transparent"/>
     <Box 
          sx={{ 
          width: '5%',
          marginTop: '10%',
          marginLeft: '15%'
          }}>
          <Stack spacing={2}>
              <img 
                src="/images/pullover.png" 
                alt="Image 1" 
                onClick={() => handleClick(0, "/images/pullover.png", '350px')} 
                style={{ border: isClicked[0] ? '1px solid black' : '', cursor: 'pointer', transition: 'border 0.5s ease-in-out' }}
              />
              <img 
                src="/images/pullover-2.jpg" 
                alt="Image 2" 
                onClick={() => handleClick(1, "/images/pullover-2.jpg", '350px')} 
                style={{ border: isClicked[1] ? '1px solid black' : '', cursor: 'pointer', transition: 'border 0.5s ease-in-out' }}
              />
              <img 
                src="/images/pullover-3.jpg" 
                alt="Image 3" 
                onClick={() => handleClick(2, "/images/pullover-3.jpg", '350px')} 
                style={{ border: isClicked[2] ? '1px solid black' : '', cursor: 'pointer', transition: 'border 0.5s ease-in-out' }}
              />
              <img 
                src="/images/pullover-4.jpg" 
                alt="Image 4" 
                onClick={() => handleClick(3, "/images/pullover-4.jpg", '350px')}  
                style={{ border: isClicked[3] ? '1px solid black' : '', cursor: 'pointer', transition: 'border 0.5s ease-in-out' }}
              />
           </Stack>
        </Box>



        <ReactImageMagnify
 {...{
   smallImage: {
     alt: "Pullover",
     isFluidWidth: true,
     src: selectedImage
   },
   largeImage: {
     src: selectedImage,
     width: 1000,
     height: 1200
   }
 }}
 style={{
   maxHeight: 350,
   maxWidth: 350,
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: '-30%',
   marginLeft: marginLeft,
   marginBottom: '50px',
   minHeight: { xs: 233, md: 167, lg: 100 },
   minWidth: { xs: 350, md: 250, lg: 100 },
 }}
/>

 {/* <Box
      component="img"
      sx={{
        maxHeight: 350, // Add this line
        maxWidth: 350, // Add this line
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-30%',
        marginLeft: marginLeft,
        marginBottom: '50px',
        minHeight: { xs: 233, md: 167, lg: 100 },
        minWidth: { xs: 350, md: 250, lg: 100 },
      }}
      alt="Pullover"
      src={selectedImage}
      
    />  */}

<Box sx={{  display: 'flex',
         '& > :not(style)': { m: 0.3 },
         marginLeft: '32%', }}>
<Fab size="small" 
sx={{
  background: '#000000',
  borderRadius: '50%', // To make the button circular
  boxShadow: 'none', // Remove shadow
  transform: 'scale(0.6)',
  '&:hover': {
   backgroundColor: 'rgba(0, 0, 0, 0.8)', 
   transition: '0.5s ease'
  },
  '&:active': {
   transform: 'scale(0.8)', // Shrink the button when clicked
  },
}}>
</Fab>

<Fab size="small" 
sx={{
  background: '#54230e',
  marginLeft: '2%',
  borderRadius: '50%', // To make the button circular
  boxShadow: 'none', // Remove shadow
  transform: 'scale(0.6)',
  '&:hover': {
   backgroundColor: 'rgba(84, 35, 14, 0.8)',
   transition: '0.5s ease'
  },
  '&:active': {
   transform: 'scale(0.8)', // Shrink the button when clicked
  },
}}>
</Fab>

<Fab size="small" 
sx={{
  background: '#090050',
  marginLeft: '2%',
  borderRadius: '50%', // To make the button circular
  boxShadow: 'none', // Remove shadow
  transform: 'scale(0.6)',
  '&:hover': {
   backgroundColor: 'rgba(9, 0, 80, 0.8)',
   transition: '0.5s ease'
  },
  '&:active': {
   transform: 'scale(0.8)', // Shrink the button when clicked
  },
}}>
</Fab>

<Fab size="small" 
sx={{
  background: '#002b14',
  marginLeft: '2%',
  borderRadius: '50%', // To make the button circular
  boxShadow: 'none', // Remove shadow
  transform: 'scale(0.6)',
  '&:hover': {
   backgroundColor: 'rgba(0, 43, 20, 0.8)',
   transition: '0.5s ease'
  },
  '&:active': {
   transform: 'scale(0.8)', // Shrink the button when clicked
  },
}}>
</Fab>

<Fab size="small" 
sx={{
  background: '#d8d8d8',
  marginLeft: '2%',
  borderRadius: '50%', // To make the button circular
  boxShadow: 'none', // Remove shadow
  transform: 'scale(0.6)',
  '&:hover': {
   backgroundColor: 'rgba(216, 216, 216, 0.8)',
   transition: '0.5s ease'
  },
  '&:active': {
   transform: 'scale(0.8)', // Shrink the button when clicked
  },
}}>
</Fab>
</Box>

<Typography 
      variant="h3" 
      gutterBottom 
      sx={{ 
        fontFamily: 'Arimo',
        fontSize: '1em', 
        fontWeight: 'bold', 
        textAlign: 'right',
        marginRight: '38.6%',
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
        marginLeft: '57%',
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
        fontFamily: 'Arimo',
        fontSize: '1em', 
        fontWeight: 'bold', 
        textAlign: 'right',
        marginRight: '37.2%',
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
        fontFamily: 'Arimo',
        fontSize: '1em', 
        fontWeight: 'bold', 
        textAlign: 'right',
        marginRight: '32.8%',
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
        fontFamily: 'Arimo',
        fontSize: '1em', 
        fontWeight: 'bold', 
        textAlign: 'right',
        marginRight: '36.7%',
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