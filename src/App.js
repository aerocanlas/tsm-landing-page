import React from 'react'
import { Typography,  Grid, Box, Card, CardContent, Image, CardMedia } from '@mui/material'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import { ThemeProvider, createTheme  } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveFooter from './components/ResponsiveFooter';
import { Route, Routes } from 'react-router-dom';
import FAQs from './components/faqs';
import Home from './components/Home';
import Contact from './components/Contact';
import Teams from './components/Teams';
import Pullover from './components/Pullover';

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
   </ThemeProvider>

   <Routes>
    <Route path='Home' element={<Home/>}/>
    <Route path='Contact' element={<Contact />}/>
    <Route path='faqs' element={<FAQs />}/>
    <Route path='Teams' element={<Teams />}/>
    <Route path='Pullover' element={<Pullover />}/>
   </Routes>
</>
  )
}

export default App