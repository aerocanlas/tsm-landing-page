import React from 'react'
import { Typography } from '@mui/material'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from '@mui/material/Toolbar';

const App = () => {

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
   <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '-80px'}}>
    <img src="/images/team-polaroid.png" alt="My Image" style={{width: '85%', height: '100%'}}/>
  </div>

  <Typography 
      variant="h3" 
      gutterBottom 
      sx={{ 
        fontSize: '1.2rem', 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginTop: '-40px' // Adjust as needed
      }}
  >
 TSM TEAM
</Typography>
<Typography 
 variant="body1" 
 gutterBottom 
 sx={{ 
  fontSize: '0.8rem', // Adjust as needed
  marginTop: '-250px', // Adjust as needed
  paddingLeft: '350px',
  paddingRight: '350px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh' // Adjust as needed
 }}
 align="justify"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
      <br/><br/>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Typography>
   </ThemeProvider>
</>
  )
}

export default App