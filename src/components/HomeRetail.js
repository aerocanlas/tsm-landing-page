import React from 'react'
import { Button, Typography,  Grid, Box, Card, CardContent, Image, CardMedia, } from '@mui/material'
import { ThemeProvider, createTheme  } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveFooter from './ResponsiveFooter';
import { Route, Routes } from 'react-router';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { FaLongArrowAltRight } from "react-icons/fa";
import Navbar from './Navbar';
import NavbarRetail from './Retail/NavbarRetail'

const Home = () => {

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
      img: '/images/Hoodie.png',
      title: 'Hoodie',

    },
    {
      img: '/images/Pullover.png',
      title: 'Pullover',
    },
    {
      img: '/images/Pants.png',
      title: 'Pants',
    },
    {
      img: '/images/Shorts.png',
      title: 'Shorts',
    },
    {
      img: '/images/Tote Bag.png',
      title: 'Tote Bag',
    },
  ];

  const theme = createTheme({
    palette: {
      background: {
        default: "#f4f4f4"
      }
    },
    Typography: [
      'Arimo',
      'sans-serif',
    ].join(',')
   });

  return (
    
    <>
    <title>The Street Market | Home</title>
       <ThemeProvider theme={theme}>
     <CssBaseline />
     <Navbar position="static" color="transparent"/>
     
   <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={20}>
          <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none', outline: 'none', height: '100vh', display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px', }}>
            <CardContent>
            <Box
      component="img"
      width="100%"
      height="auto"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: '-100',
        height: { xs: 233, md: 167, lg: '100%', xl: '150%' },
        width: { xs: 350, md: 250, lg: '100%', xl: '100%' },
      }}
      alt="The house from the offer."
      src="/images/RETAIL BANNER TEMPORARY.png"
    /> 

<Button sx={{marginTop: '900px',
            fontSize: '30px',
            fontWeight: 'bold',
            color: 'white'
}} href="/retail/productretail">
  VIEW V2 COLLECTION

<Box ml={2} ><FaLongArrowAltRight size={30}/></Box>
</Button>
           {/* <Card  sx={{ minWidth: '100%', flexGrow: 1 }}>
           <video
            autoPlay
            loop
            muted
          >
            <source
              src="/images/rotating-vid.mp4"
              type="video/mp4"
            />
          </video>
      </Card> */}
              </CardContent>
            </Card>
          </Grid>
          {/* <Card sx={{ backgroundColor: '#f4f4f4', boxShadow: 'none', outline: 'none', height: '20vh', display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', }}>
            <CardContent SX={{display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',}}>
          <Typography 
      variant="h3" 
      gutterBottom 
      sx={{ 
        fontSize: '1.2rem', 
        fontWeight: 'bold', 
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',  // Adjust as needed
      }}
  >
 UNLEASH YOUR BRAND WITH CONFIDENCE.
</Typography>
</CardContent>
</Card> */}
          </Grid>

      </Box>

    
   <ResponsiveFooter position="bottom"/>

   </ThemeProvider>
</>
  )
}

export default Home