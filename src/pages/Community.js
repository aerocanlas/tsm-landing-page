import React from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveFooter from '../components/ResponsiveFooter';
import Navbar from "../components/Navbar";
import { Box } from '@mui/material';

const Community = () => {

 const theme = createTheme({
   palette: {
     background: {
       default: "#f4f4f4"
     }
   }
  });

 return (
   <>
   <title>The Street Market | Community</title>
      <ThemeProvider theme={theme}>
    <CssBaseline />
    <Navbar position="static" color="transparent"/>
    <Box sx={{marginTop: '50px', marginBottom: '64px', width: ['100%', '100%', '100%', '100%', '100%']}}>
 <img src="/images/Community-Page-Placeholder-Image.png" alt="Community" style={{width: '100%', height: 'auto', objectFit: 'contain'}}/>
</Box>

    <ResponsiveFooter position="bottom"/>
  </ThemeProvider>
</>
 )
}

export default Community
