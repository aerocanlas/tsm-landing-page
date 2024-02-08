import React, { useState } from 'react'
import Navbar from '../Navbar'
import ResponsiveFooter from '../ResponsiveFooter'
import { Typography,  Grid, Box, Card, CardContent, Image, CardMedia } from '@mui/material'
import ResponsiveAppBar from '../ResponsiveAppBar'
import { ThemeProvider, createTheme  } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from 'react-router';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import ReactImageMagnify from 'react-image-magnify';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const BlueHoodieV2 = () => {
  const [isClicked, setIsClicked] = useState([false, false, false, false]);
  const [selectedImage, setSelectedImage] = useState("/images/Blue-Hoodie-V2.png");
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
        default: "#ffffff"
      }
    },
    Typography: [
      'Arimo',
      'sans-serif',
    ].join(',')
   });
  return (
    <>
    <Navbar position="static" color="transparent"/>

    <Box 
          sx={{ 
          width: '5%',
          marginTop: '10%',
          marginBottom: '50%',
          marginLeft: '15%'
          }}>
          <Stack spacing={2}>
              <img 
                src="/images/Blue-Hoodie-V2.png" 
                alt="Image 1" 
                onClick={() => handleClick(0, "/images/Blue-Hoodie-V2.png", '400px')} 
                style={{ border: isClicked[0] ? '1px solid black' : '', cursor: 'pointer', transition: 'border 0.5s ease-in-out' }}
              />
              <img 
                src="/images/Blue-Hoodie-2.jpg" 
                alt="Image 2" 
                onClick={() => handleClick(1, "/images/Blue-Hoodie-2.jpg", '400px')} 
                style={{ border: isClicked[1] ? '1px solid black' : '', cursor: 'pointer', transition: 'border 0.5s ease-in-out' }}
              />
              <img 
                src="/images/Blue-Hoodie-3.jpg" 
                alt="Image 3" 
                onClick={() => handleClick(2, "/images/Blue-Hoodie-3.jpg", '400px')} 
                style={{ border: isClicked[2] ? '1px solid black' : '', cursor: 'pointer', transition: 'border 0.5s ease-in-out' }}
              />
              <img 
                src="/images/Blue-Hoodie-4.jpg" 
                alt="Image 4" 
                onClick={() => handleClick(3, "/images/Blue-Hoodie-4.jpg", '400px')}  
                style={{ border: isClicked[3] ? '1px solid black' : '', cursor: 'pointer', transition: 'border 0.5s ease-in-out' }}
              />
           </Stack>
        </Box>


<Box sx={{
        maxHeight: {lg: 320, xl: 500}, // Add this line
        maxWidth: {lg: 320, xl: 500}, // Add this line
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-75%',
        marginLeft: {lg: '390px', xl:'550px'},
        marginBottom: '50%',
        minHeight: { xs: 233, md: 167, lg: 100 },
        minWidth: { xs: 350, md: 250, lg: 100 },
      }}>
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
/>
</Box>

<Box sx={{  display: 'flex',

         '& > :not(style)': { m: 0.3 },
         marginLeft: {lg:'32%', xl: '33%'},
         marginTop: {lg: '-45%'},
         marginBottom: {lg: '50%'} }}>
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
            <CardContent>
            <Card sx={{ backgroundColor: '#ffffff', boxShadow: 'none', outline: 'none', width: {xs: '300px', lg: '550px', xl: '1600px'}, height: 'auto', display: 'flex',
            marginLeft: '730px',
        marginTop: '-85%',
        marginBottom: '100px',
        paddingBottom: '40px' }}>
          <CardContent>
          <Typography 
    variant="h3" 
    gutterBottom 
    sx={{ 
      fontFamily: 'Arimo',
      fontSize: {lg: '0.8em', xl: '1.1em'},  
      marginLeft: '10%',
      marginTop: '15%',
      marginBottom: '15%'
    }}
    align="justify"
 >
    Our Products {'> '} <Link to={'/BlueHoodieV2'} style={{color: 'black', textDecoration: 'none'}}>
      <b>{`Hoodie`}</b>
    </Link>
 </Typography>
 <Typography 
    variant="h3" 
    gutterBottom 
    sx={{ 
      fontFamily: 'Arimo',
      fontSize: {lg: '1em', xl: '1.5em'}, 
      fontWeight: 'bold', 
      marginLeft: '10%',
      width: '100%'
    }}
 >
    Navy Blue Hoodie V2
 </Typography>
 <Typography 
    variant="h3" 
    gutterBottom 
    sx={{ 
      fontFamily: 'Arimo',
      fontSize: {lg: '0.9em', xl: '1.5em'}, 
      marginLeft: '10%'
    }}
 >
    999PHP
 </Typography>
 <div style={{width: '365%', marginTop: '15%', marginLeft: '-15%'}}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ fontFamily: 'Arimo', fontSize: {lg: '0.8rem', xl: '1.1em'}, fontStyle: 'bold', marginLeft: '4.5%' }}>Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>
</div>
<div style={{width: '365%', marginTop: '15%', marginLeft: '-15%'}}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ fontFamily: 'Arimo', fontSize: {lg: '0.8rem', xl: '1.1em'}, fontStyle: 'bold', marginLeft: '4.5%' }}>Size Guide</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>
</div>
<div style={{width: '365%', marginTop: '15%', marginLeft: '-15%'}}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ fontFamily: 'Arimo', fontSize: {lg: '0.8rem', xl: '1.1em'}, fontStyle: 'bold', marginLeft: '4.5%' }}>Shipping</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>
</div>
<div style={{width: '365%', marginTop: '15%', marginLeft: '-15%'}}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ fontFamily: 'Arimo', fontSize: {lg: '0.8rem', xl: '1.1em'}, fontStyle: 'bold', marginLeft: '4.5%' }}>Where to Shop</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>
</div>
<div style={{width: '365%', marginTop: '15%', marginLeft: '-15%'}}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ fontFamily: 'Arimo', fontSize: {lg: '0.8rem', xl: '1.1em'}, fontStyle: 'bold', marginLeft: '4.5%' }}>Need Help?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>
</div>

      </CardContent></Card></CardContent>

    <ResponsiveFooter position="bottom"/>
    </>
  )
}

export default BlueHoodieV2