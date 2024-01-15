import React from 'react'
import { Typography,  Grid, Box, Card, CardContent, Image, CardMedia } from '@mui/material'
import ResponsiveAppBar from './ResponsiveAppBar'
import { ThemeProvider, createTheme  } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveFooter from './ResponsiveFooter';
import { Route, Routes } from 'react-router';
import FAQs from './faqs';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => {

  const theme = createTheme({
    palette: {
      background: {
        default: "#f4f4f4"
      }
    }
   });

  return (
    <>
    <title>The Street Market | Contact </title>
       <ThemeProvider theme={theme}>
     <CssBaseline />
     <ResponsiveAppBar position="static" color="transparent"/>
    <Box sx={{ml: {lg: '-330px', xl: '-500px'}, display: 'flex',  justifyContent: 'center', alignItems: 'center', marginTop: '100px', marginBottom: '100px'}}>
    <Box
      component="img"
      sx={{
        minHeight: { xs: 350, md: 250, lg: 450, xl: 500 }, // Add this line
        maxWidth: { xs: 350, md: 250, lg: 580, xl: 700 },// Add this line
        marginTop: '-300px',
        marginBottom: '-300px',
        position: 'relative',
        left: '200px',
        zIndex: '150px'
      }}
      alt=""
      src="/images/Contact1.png"
    />  
    <Card sx={{ backgroundColor: '#ffffff', boxShadow: 'none', outline: 'none', width: '500px', height: '600px', display: 'flex',
        justifyContent: 'center', alignItems: 'center', }}>
            <CardContent>
            <Typography 
      variant="h3" 
      gutterBottom 
      sx={{ 
        ml: '15px',
        fontSize: '1.2rem', 
        fontWeight: 'bold', 
        textAlign: 'left',
        fontFamily: 'Arimo',
        textTransform: 'normal', // Adjust as needed
      }}
  >
 Contact</Typography>
 <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="First Name" variant="standard" />
      <TextField id="standard-basic" label="Last Name" variant="standard" />
      <TextField id="standard-email-basic" label="Email" variant="standard" />
      <TextField id="standard-basic" label="Phone" variant="standard" />
      <TextField id="standard-basic" label="Order Number (Optional)" variant="standard" />
      <Button variant="standard"> Submit
          {/* <Typography variant='body1' sx={{color: '#d3d3d3', '&:hover': {
          color: '#000000', 
          transition: '0.5s ease'
        }, }}>Submit</Typography> */}
        </Button>
    </Box>



              </CardContent>
              </Card>
              <Box
      component="img"
      sx={{
        minHeight: { xs: 350, md: 250, lg: 150, xl: 180 }, // Add this line
        maxWidth: { xs: 350, md: 250, lg: 250, xl: 280 },// Add this line
        marginTop: '-300px',
        marginBottom: '-300px',
        position: 'relative',
        left: '-40px',
        zIndex: '150px'
      }}
      alt=""
      src="/images/Contact2.png"
    /> </Box>
     
   <ResponsiveFooter position="bottom"/>
   </ThemeProvider>
</>
  )
}

export default Contact