import React from 'react'
import { Typography,  Grid, Box, Card, CardContent, Image, CardMedia, } from '@mui/material'
import ResponsiveAppBar from './ResponsiveAppBar'
import { ThemeProvider, createTheme  } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveFooter from './ResponsiveFooter';
import { Route, Routes } from 'react-router';
import FAQs from './faqs';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

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
       <ThemeProvider theme={theme}>
     <CssBaseline />
     <ResponsiveAppBar position="static" color="transparent"/>
    
   <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={20}>
          <Card sx={{ backgroundColor: '#f4f4f4', boxShadow: 'none', outline: 'none', height: '100vh', display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px', }}>
            <CardContent>
             {/* <Box
      component="img"
      width="100%"
      height="auto"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-80px',
        maxHeight: { xs: 233, md: 167, lg: 1080 },
        maxWidth: { xs: 350, md: 250, lg: 1080 },
      }}
      alt="The house from the offer."
      src="/images/Home-Banner-Option-1.png"
    />  */}

 <Box
      component="img"
      sx={{
        minHeight: { xs: 350, md: 250, lg: 800, xl: 1000 }, // Add this line
        maxWidth: { xs: 350, md: 250, lg: 1360, xl: 1800 },// Add this line
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-300px',
        marginBottom: '-300px'
      }}
      alt=""
      src="/images/rotating.gif"
    />  
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
          <Typography 
      variant="h3" 
      gutterBottom 
      sx={{ 
        fontSize: '1.2rem', 
        fontWeight: 'bold', 
        textAlign: 'center',
        textTransform: 'uppercase',
        fontStyle: 'italic' // Adjust as needed
      }}
  >
 unleash your brand with confidence.
</Typography>
<Typography 
 variant="body1" 
 gutterBottom
  
 sx={{ 
  paddingTop: '20px',
  paddingBottom: '20px',
  fontSize: '0.8rem', // Adjust as needed, // Adjust as needed
  // paddingLeft: '350px',
  // paddingRight: '350px',
  textAlign: "center", // Adjust as needed
 }}
 align="center"
>
Your brand will undoubtedly dominate the market <br></br>with a high-end and superior supply of garments.  </Typography>
      </Box>

      <Card sx={{ backgroundColor: '#ffffff', boxShadow: 'none', outline: 'none', height: '800px', display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
        marginBottom: '5px', }}>
            <CardContent>
<Typography variant="h1" 
      gutterBottom 
      sx={{ 
        marginTop: '50px', 
        fontSize: '1rem', 
        textAlign: 'center',
        textTransform: 'normal',
        fontFamily: 'Arimo',
         // Adjust as needed
      }}> Our Products</Typography>

<Stack direction="row" spacing={2} sx={{
  marginTop: '120px',
  
}}>
        <Item>
        <Box
      component="img"
      sx={{
        backgroundColor: '#ffffff', boxShadow: 'none', outline: 'none',
        minHeight: { xs: 350, md: 250, lg: 500, xl: 300 }, // Add this line
        maxWidth: { xs: 350, md: 250, lg: 500, xl: 300 },// Add this line
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      }}
      alt=""
      src="/images/Hoodie.png"
    />  
        </Item>
        <Item>
        <Box
      component="img"
      sx={{
        minHeight: { xs: 350, md: 250, lg: 500, xl: 300 }, // Add this line
        maxWidth: { xs: 350, md: 250, lg: 500, xl: 300 },// Add this line
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      }}
      alt=""
      src="/images/Pullover.png"
    />  
        </Item>
        <Item>
        <Box
      component="img"
      sx={{
        minHeight: { xs: 350, md: 250, lg: 500, xl: 300 }, // Add this line
        maxWidth: { xs: 350, md: 250, lg: 500, xl: 300 },// Add this line
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      }}
      alt=""
      src="/images/Pants.png"
    />  
        </Item>
        <Item>
        <Box
      component="img"
      sx={{
        minHeight: { xs: 350, md: 250, lg: 500, xl: 300 }, // Add this line
        maxWidth: { xs: 350, md: 250, lg: 500, xl: 300 },// Add this line
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      }}
      alt=""
      src="/images/Shorts.png"
    />  
        </Item>
        <Item>
        <Box
      component="img"
      sx={{
        minHeight: { xs: 350, md: 250, lg: 500, xl: 300 }, // Add this line
        maxWidth: { xs: 350, md: 250, lg: 500, xl: 300 },// Add this line
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      }}
      alt=""
      src="/images/Tote Bag.png"
    />  
        </Item>
      </Stack>

      <Box sx={{ marginTop: '120px', display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', '& > :not(style)': { m: 0.5 } }}>
      <Fab size="small" maxWidth='0.1rem' color="secondary" aria-label="add" sx={{
        background: '#000000',
        transform: 'scale(0.6)',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.8)', 
          transition: '0.5s ease'
        },
        '&:active': {
          transform: 'scale(0.8)', // Shrink the button when clicked
        },}} >
      </Fab>
      <Fab size="small" color="secondary" aria-label="add" sx={{
        background: '#54230e',
        transform: 'scale(0.6)',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.8)', 
          transition: '0.5s ease'
        },
        '&:active': {
          transform: 'scale(0.8)', // Shrink the button when clicked
        },}}>
      </Fab>
      <Fab size="small" color="secondary" aria-label="add" sx={{
        background: '#090050',
        transform: 'scale(0.6)',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.8)', 
          transition: '0.5s ease'
        },
        '&:active': {
          transform: 'scale(0.8)', // Shrink the button when clicked
        },}}>
      </Fab>
      <Fab size="small" color="secondary" aria-label="add" sx={{
        background: '#002b14',
        transform: 'scale(0.6)',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.8)', 
          transition: '0.5s ease'
        },
        '&:active': {
          transform: 'scale(0.8)', // Shrink the button when clicked
        },}}>
      </Fab>
      <Fab size="small" color="secondary" aria-label="add" sx={{
        background: '#d8d8d8',
        transform: 'scale(0.6)',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.8)', 
          transition: '0.5s ease'
        },
        '&:active': {
          transform: 'scale(0.8)', // Shrink the button when clicked
        },}}>
      </Fab>
    </Box>
            </CardContent>
      </Card>

      <Card sx={{ backgroundColor: '#ffffff', boxShadow: 'none', outline: 'none', height: '1000px', display: 'flex',
        justifyContent: 'center', }}>
            <CardContent>
            <Card sx={{ backgroundColor: '#f4f4f4', boxShadow: 'none', outline: 'none', width: '1600px', height: '750px', display: 'flex',
            marginTop: '100px',
        justifyContent: 'center',
        marginBottom: '100px', }}>
          <CardContent>
<Typography variant="h1" 
      gutterBottom 
      sx={{ 
        marginTop: '120px',
        fontWeight: 'bold', 
        fontSize: '1.2rem', 
        justifyContent: 'center',
        textAlign: 'center',
        textTransform: 'normal',
        fontFamily: 'Arimo',
        display: 'flex'
         // Adjust as needed
      }}> HOW TO ORDER</Typography>

<Grid container>
 <Grid item xs={5}>
   <Grid container direction="column" alignItems="flex-start">
<Box sx={{display: 'inline-flex'}}>
<Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontSize: '1.2rem', ml: 20, mt: 10, display: 'flex', textTransform: 'uppercase', fontWeight: 'bold' }}>
   01
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontSize: '1.2rem', ml: 5, mt: 10, display: 'flex', textTransform: 'uppercase', fontWeight: 'bold' }}>
   Tech Pack
 </Typography>
</Box>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: 28.2, mt: 1, maxWidth: '350px', letterSpacing: '0.7px' }} align="justify">
 Mock-ups with or without print designs, fabric colors, quantity per size, label design, measurements, attachments, or samples of similar garments with the fit you prefer are required.  
 </Typography>

 <Box sx={{display: 'inline-flex'}}>
<Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontSize: '1.2rem', ml: 20, mt: 10, display: 'flex', textTransform: 'uppercase', fontWeight: 'bold' }}>
   02
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontSize: '1.2rem', ml: 5, mt: 10, display: 'flex', textTransform: 'uppercase', fontWeight: 'bold' }}>
 Get a Quote
 </Typography>
</Box>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: 28.2, mt: 1, maxWidth: '350px', letterSpacing: '0.7px' }} align="justify">
 Please refer to our Request a Quote by filling out the Application Form and provide the required details to receive a fair cost estimate.
  </Typography>

   </Grid>
 </Grid>

 <Grid item xs={5}>
   <Grid container direction="column" alignItems="flex-start">
<Box sx={{display: 'inline-flex'}}>
<Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontSize: '1.2rem', ml: 20, mt: 10, display: 'flex', textTransform: 'uppercase', fontWeight: 'bold' }}>
   03
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontSize: '1.2rem', ml: 5, mt: 10, display: 'flex', textTransform: 'uppercase', fontWeight: 'bold' }}>
 Sampling
 </Typography>
</Box>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: 28.2, mt: 1, maxWidth: '350px', letterSpacing: '0.7px' }} align="justify">
 If you would like a sample before putting in a production order, we can accommodate that request. The cost of a sample can be prohibitively expensive in small orders.  
 </Typography>

 <Box sx={{display: 'inline-flex',}}>
<Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontSize: '1.2rem', ml: 20, mt: 10, display: 'flex', textTransform: 'uppercase', fontWeight: 'bold' }}>
   04
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', width: '300px', fontSize: '1.2rem', ml: 5, mt: 10, display: 'flex', textTransform: 'uppercase', fontWeight: 'bold' }}>
 Mass Production Slot
 </Typography>
</Box>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: 28.2, mt: 1, maxWidth: '350px', letterSpacing: '0.7px' }} align="justify">
 Given that there will be more options, supplies, opportunities, and a more secure date of release. We will only accept a maximum of thirty (30) slots every month.
   </Typography>

   </Grid>
 </Grid></Grid>
        
      </CardContent>
      
      </Card>

      
      </CardContent></Card>
    
   <ResponsiveFooter position="bottom"/>

   </ThemeProvider>
</>
  )
}

export default Home