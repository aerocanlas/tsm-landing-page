import React from 'react'
import { Typography,  Grid, Box, Card, CardContent, Image, CardMedia } from '@mui/material'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import { ThemeProvider, createTheme  } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveFooter from './components/ResponsiveFooter';

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
          </Grid>
      </Box>
   <ResponsiveFooter position="bottom">
   </ResponsiveFooter>
   </ThemeProvider>
</>
  )
}

export default App