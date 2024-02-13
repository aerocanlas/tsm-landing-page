import React from 'react'
import { ThemeProvider, createTheme  } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from 'react-router-dom';
import FAQs from './components/faqs';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Teams from './components/Teams';
import Pullover from './components/Pullover';
import Community from './components/Community';
import StandardRate from './components/StandardRate';
import SizeGuide from './components/SizeGuide';
import HomeRetail from './components/HomeRetail';
import ProductRetail from './components/Retail/ProductRetail';
import BlueHoodieV2 from './components/Retail/BlueHoodieV2';

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
    <Route path='/' element={<Home/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='Contact' element={<Contact />}/>
    <Route path='/Faqs' element={<FAQs />}/>
    <Route path='About' element={<About />}/>
    <Route path='Teams' element={<Teams />}/>
    <Route path='Community' element={<Community />}/>
    <Route path='Pullover' element={<Pullover />}/>
    <Route path='StandardRate' element={<StandardRate />}/>
    <Route path='SizeGuide' element={<SizeGuide />}/>
    <Route path='HomeRetail' element={<HomeRetail />}/>
    <Route path='Retail/ProductRetail' element={<ProductRetail />}/>
    <Route path='Retail/BlueHoodieV2' element={<BlueHoodieV2 />}/>

   </Routes>
</>
  )
}

export default App