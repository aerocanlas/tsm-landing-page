import React from 'react'
import { Typography,  Grid, Box, Card, CardContent, Image, CardMedia } from '@mui/material'
import ResponsiveAppBar from './ResponsiveAppBar'
import { ThemeProvider, createTheme  } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveFooter from './ResponsiveFooter';
import { Route, Routes } from 'react-router';
import FAQs from './faqs';

const Home = () => {

  const theme = createTheme({
    palette: {
      background: {
        default: "#f4f4f4"
      }
    }
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
        maxHeight: 1000, // Add this line
        maxWidth: 2000, // Add this line
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-80px',
        minHeight: { xs: 233, md: 167, lg: 1080 },
        minWidth: { xs: 350, md: 250, lg: 1080 },
      }}
      alt="The house from the offer."
      src="/images/rotating.gif"
    /> 
           {/* <Card  sx={{ minWidth: '100%', flexGrow: 1 }}>
           <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
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

   <ResponsiveFooter position="bottom"/>

   </ThemeProvider>
</>
  )
}

export default Home