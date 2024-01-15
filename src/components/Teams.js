import React from 'react'
import { Typography } from '@mui/material'
import ResponsiveAppBar from './ResponsiveAppBar'
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from '@mui/material/Toolbar';
import ResponsiveFooter from './ResponsiveFooter';
import { Route, Routes } from 'react-router';
import FAQs from './faqs';

const App = () => {

    let theme = createTheme({
        palette: {
          background: {
            default: "#f4f4f4"
          }
        }
       });
       
       theme = responsiveFontSizes(theme);
       

  return (
    <>
    <title>The Street Market | Teams </title>
       <ThemeProvider theme={theme}>
     <CssBaseline />
     <ResponsiveAppBar position="static" color="transparent">
   </ResponsiveAppBar>
   <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '-80px'}}>
 <img src="/images/team-polaroid.png" alt="My Image" style={{maxWidth: '90%', height: 'auto', objectFit: 'contain'}}/>
</div>


  <Typography 
      variant="h3" 
      gutterBottom 
      sx={{ 
        fontSize: { xs: '0.9em', sm: '1rem', md: '1.5rem' },
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginTop: { xs: '-200px', sm: '100px', md: '-70px', lg: '30px' }, // Adjust as needed
        marginBottom: { xs: '50px', sm: '', md: '30px', lg: '90px' }
      }}
  >
 TSM TEAM
</Typography>
<Typography 
 variant="body1" 
 gutterBottom 
 sx={{ 
    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' }, // Adjust as needed
    marginTop: { xs: '-250px', sm: '-200px', md: '-250px', lg: '-250px' }, // Adjust as needed
    paddingLeft: { xs: '10px', sm: '350px', md: '300px' },
    paddingRight: { xs: '10px', sm: '350px', md: '300px' },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh' // Adjust as needed
  }}
 align="center"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
      <br/><br/>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Typography>
  <ResponsiveFooter position="bottom"/>
   </ThemeProvider>
</>
  )
}

export default App