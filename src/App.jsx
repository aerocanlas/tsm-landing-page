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
   </ThemeProvider>
</>
  )
}

export default App