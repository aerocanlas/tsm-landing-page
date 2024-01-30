import React from 'react'
import { Typography, Image } from '@mui/material'
import ResponsiveAppBar from './ResponsiveAppBar'
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from '@mui/material/Toolbar';
import ResponsiveFooter from './ResponsiveFooter';
import { Route, Routes } from 'react-router';
import FAQs from './faqs';
import Draggable from 'react-draggable';

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
   <Draggable>
   <img src="/images/8.png" alt="My Image" style={{ marginLeft: '20%', marginTop: '15%',  maxWidth: '18%', height: 'auto', objectFit: 'contain'}}/>
    </Draggable>
   <Draggable>
   <img src="/images/1.png" alt="My Image" style={{ marginLeft: '-9%', marginBottom: '3%',  maxWidth: '18%', height: 'auto', objectFit: 'contain'}}/>
    </Draggable>
    <Draggable>
   <img src="/images/2.png" alt="My Image" style={{ marginLeft: '-7.3%', marginBottom: '4%',maxWidth: '16%', height: 'auto', objectFit: 'contain'}}/>
    </Draggable>
    <Draggable>
   <img src="/images/11.png" alt="My Image" style={{ marginLeft: '-8.3%', marginBottom: '2%', maxWidth: '19.5%', height: 'auto', objectFit: 'contain'}}/>
    </Draggable>
    <Draggable>
   <img src="/images/3.png" alt="My Image" style={{ marginLeft: '-9.7%', marginBottom: '2.6%', maxWidth: '18%', height: 'auto', objectFit: 'contain'}}/>
    </Draggable>
    <Draggable>
   <img src="/images/4.png" alt="My Image" style={{ marginLeft: '-5.2%', marginBottom: '1%', maxWidth: '18%', height: 'auto', objectFit: 'contain'}}/>
    </Draggable>
    <Draggable>
   <img src="/images/7.png" alt="My Image" style={{  marginLeft: '18%', marginTop: '-7.5%', maxWidth: '18%', height: 'auto', objectFit: 'contain',  display: 'block'}}/>
    </Draggable>
    <Draggable>
   <img src="/images/10.png" alt="My Image" style={{  marginLeft: '28.9%', marginTop: '-17%', maxWidth: '18%', height: 'auto', objectFit: 'contain', display: 'block'}}/>
    </Draggable>
    <Draggable>
   <img src="/images/6.png" alt="My Image" style={{ marginLeft: '38%', marginTop: '-18%', maxWidth: '18%', height: 'auto', objectFit: 'contain', display: 'block'}}/>
    </Draggable>
    <Draggable>
   <img src="/images/5.png" alt="My Image" style={{  marginLeft: '47.3%', marginTop: '-18.5%', maxWidth: '18%', height: 'auto', objectFit: 'contain', display: 'block'}}/>
    </Draggable>
    <Draggable>
   <img src="/images/12.png" alt="My Image" style={{  marginLeft: '56.8%', marginTop: '-17%', maxWidth: '17%', height: 'auto', objectFit: 'contain', display: 'block'}}/>
    </Draggable>
    <Draggable>
   <img src="/images/9.png" alt="My Image" style={{  marginLeft: '65.5%', marginTop: '-18%', maxWidth: '18%', height: 'auto', objectFit: 'contain', display: 'block'}}/>
    </Draggable>

  <Typography 
      variant="h3" 
      gutterBottom 
      sx={{ 
        fontSize: { xs: '0.9em', sm: '1rem', md: '1rem', lg: '1.2rem', xl: '1.2rem' },
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginTop: { xs: '-320px', sm: '100px', md: '-70px', lg: '50px', xl: '-50px' }, // Adjust as needed
        marginBottom: { xs: '50px', sm: '', md: '30px', lg: '90px' }
      }}
  >
 TSM TEAM
</Typography>
<Typography 
 variant="body1" 
 gutterBottom 
 sx={{ 
    fontSize: { xs: '0.6rem', sm: '0.8rem', md: '1rem', lg: '0.8rem' }, // Adjust as needed
    marginTop: { xs: '-350px', sm: '-200px', md: '-250px', lg: '-280px', xl: '-200px' }, // Adjust as needed
    paddingLeft: { xs: '20px', sm: '350px', md: '300px' },
    paddingRight: { xs: '20px', sm: '350px', md: '300px' },
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