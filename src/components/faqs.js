import React from 'react'
import { Typography } from '@mui/material'
import ResponsiveAppBar from './ResponsiveAppBar'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import ResponsiveFooter from './ResponsiveFooter';

const FAQs = () => {

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
     <ResponsiveAppBar position="static" color="transparent">
   </ResponsiveAppBar>
   <Typography variant="h3" gutterBottom sx={{ fontSize: '1.2rem', textDecoration: 'underline', ml: 24.5, mt: 5 }}>
    FREQUENTLY ASKED QUESTIONS
  </Typography>
 
  <Grid container>
 <Grid item xs={6}>
   <Grid container direction="column" alignItems="flex-start">
   <Typography variant="body1" gutterBottom sx={{ fontSize: '1.2rem', ml: 24.5, mt: 10 }}>
   Question 1?
 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: 24.5, mt: 1 }} align="justify">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br/>enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/>nisi ut aliquip ex ea commodo consequat. 
 </Typography>

 <Typography variant="body1" gutterBottom sx={{ fontSize: '1.2rem', ml: 24.5, mt: 10 }}>
   Question 2?
 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: 24.5, mt: 1 }} align="justify">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br/>enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/>nisi ut aliquip ex ea commodo consequat. 
 </Typography>

 <Typography variant="body1" gutterBottom sx={{ fontSize: '1.2rem', ml: 24.5, mt: 10 }}>
   Question 3?
 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: 24.5, mt: 1, mb: 20 }} align="justify">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br/>enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/>nisi ut aliquip ex ea commodo consequat. 
 </Typography>

   </Grid>
 </Grid>

 <Grid item xs={6}>
   <Grid container direction="column" justifyContent="flex-end">
   <Typography variant="body1" gutterBottom sx={{ fontSize: '1.2rem', ml: 24.5, mt: 10 }}>
   Question 4?
 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: 24.5, mt: 1 }} align="justify">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br/>enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/>nisi ut aliquip ex ea commodo consequat. 
 </Typography>

 <Typography variant="body1" gutterBottom sx={{ fontSize: '1.2rem', ml: 24.5, mt: 10 }}>
   Question 5?
 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: 24.5, mt: 1 }} align="justify">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br/>enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/>nisi ut aliquip ex ea commodo consequat. 
 </Typography>

 <Typography variant="body1" gutterBottom sx={{ fontSize: '1.2rem', ml: 24.5, mt: 10 }}>
   Question 6?
 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: 24.5, mt: 1, mb: 20 }} align="justify">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br/>enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/>nisi ut aliquip ex ea commodo consequat. 
 </Typography>

   </Grid>
 </Grid>
</Grid>

  <ResponsiveFooter position="bottom"/>
   </ThemeProvider>
</>
  )
}

export default FAQs