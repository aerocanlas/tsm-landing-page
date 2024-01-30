import React from 'react'
import { Typography, Grid, Box, Card, CardContent, Image, CardMedia } from '@mui/material'
import ResponsiveAppBar from './ResponsiveAppBar'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveFooter from './ResponsiveFooter';
import { Route, Routes } from 'react-router';
import FAQs from './faqs';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Navbar from "./Navbar";

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
 <img src="/images/Community-Page-Placeholder-Image.png" alt="My Image" style={{width: '100%', height: 'auto', objectFit: 'contain'}}/>
</Box>

    <ResponsiveFooter position="bottom"/>
  </ThemeProvider>
</>
 )
}

export default Community
