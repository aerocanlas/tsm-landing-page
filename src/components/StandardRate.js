import React from 'react'
import { Typography, Grid, Box, Card, CardContent } from '@mui/material'
import Navbar from './Navbar'
import { ThemeProvider, createTheme, } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveFooter from './ResponsiveFooter';

const App = () => {

  const theme = createTheme({
    palette: {
      background: {
        default: "#ffffff"
      }
    },
    Typography: [
      'Arimo',
      'sans-serif',
    ].join(',')
   });
       

  return (
    <>
    <title>The Street Market | Standard Rate </title>
       <ThemeProvider theme={theme}>
     <CssBaseline />
     <Navbar position="static" color="transparent"/>

   <Typography 
      variant="h3" 
      gutterBottom 
      sx={{ 
        fontSize: { xs: '0.9em', sm: '1rem', md: '1rem', lg: '1rem', xl: '1.2rem' }, 
        textAlign: 'center', 
        textTransform: 'uppercase',
        marginTop: { xs: '-320px', sm: '100px', md: '-70px', lg: '100px', xl: '50px' }, // Adjust as needed
        marginBottom: { xs: '50px', sm: '', md: '30px', lg: '40px' }
      }}
  >
Standard Rate
</Typography>

<Card sx={{ backgroundColor: '#ffffff', boxShadow: 'none', outline: 'none', height: {xs: '500px', lg:'500px', xl: '500px'}, display: 'flex',
        justifyContent: 'left', }}>
            <CardContent>
            <Card sx={{ backgroundColor: '#f4f4f4', boxShadow: 'none', outline: 'none', width: {xs: '300px', lg: '380px', xl: '500px'}, height: {xs: '500px', lg:'500px', xl: '500px'}, display: 'flex',
            marginLeft: {lg: '100px', xl: '170px'},
        justifyContent: 'left',
        marginBottom: '100px', }}>
          <CardContent>
<Typography variant="h1" 
      gutterBottom 
      sx={{ 
        marginTop: '30px',
        marginLeft: '120px',
        fontWeight: 'bold', 
        fontSize: { xs: '0.8rem', lg: '1.2rem' },
        justifyContent: 'left',
        textAlign: 'left',
        textTransform: 'normal',
        fontFamily: 'Arimo',
        display: 'flex'
         // Adjust as needed
      }}> ADD ONS</Typography>

<Grid container sx={{overflowX: {xs: 'auto'}}}>
 <Grid item xs={5}>
   <Grid container direction="column" alignItems="flex-start">
<Box sx={{display: 'inline-flex'}}>
<Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 18}, mt: 5, display: 'flex', width: '80px' }}>
   Neck Tape
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 5, lg: 5, xl: 5}, mt: 5, display: 'flex', width: '50px' }}>
   15
 </Typography>
</Box>
<Box sx={{display: 'inline-flex'}}>
<Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 10.5}, display: 'flex', width: '150px' }}>
   Etiketa (Sublimation)
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 5, lg: 5, xl: 3.8}, display: 'flex', width: '50px' }}>
   30
 </Typography>
</Box>
<Box sx={{display: 'inline-flex'}}>
<Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 12}, display: 'flex', width: '150px' }}>
   Etiketa Attachment
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 5, lg: 5, xl: 2.5}, display: 'flex', width: '50px' }}>
   20
 </Typography>
</Box>
<Box sx={{display: 'inline-flex'}}>
<Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 13.5}, display: 'flex', width: '150px' }}>
   Inner Label Print
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 5, lg: 5, xl: 1}, display: 'flex', width: '50px' }}>
   70
 </Typography>
</Box>
<Box sx={{display: 'inline-flex'}}>
<Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 14.8}, display: 'flex', width: '150px' }}>
   Ziplock - Large
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 5, lg: 5, xl: -0.3}, display: 'flex', width: '50px' }}>
   45
 </Typography>
</Box>
<Box sx={{display: 'inline-flex'}}>
<Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 17}, display: 'flex', width: '150px' }}>
   Ziplock - XL
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 5, lg: 5, xl: -2.4}, display: 'flex', width: '50px' }}>
   60
 </Typography>
</Box>
<Box sx={{display: 'inline-flex'}}>
<Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 16}, display: 'flex', width: '150px' }}>
   Ziplock - 2XL
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 5, lg: 5, xl: -1.4}, display: 'flex', width: '50px' }}>
   75
 </Typography>
</Box>
<Box sx={{display: 'inline-flex'}}>
<Typography variant="body1" gutterBottom sx={{ justifyContent: 'right', textAlign: 'right', fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 10.5}, display: 'flex', width: '120px' }}>
   Ziplock Logo Print (per color)
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 5, lg: 5, xl: 7.8}, display: 'flex', width: '50px' }}>
   50
 </Typography>
 </Box>


{/* second half */}
<Box sx={{display: 'inline-flex'}}>
<Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 10.5}, mt: 2, display: 'flex', width: '150px' }}>
   Pattern Fee (per size)
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 5, lg: 5, xl: 2}, mt: 2, display: 'flex', width: '50px' }}>
   250
 </Typography>
</Box>
<Box sx={{display: 'inline-flex'}}>
<Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 10}, display: 'flex', width: '150px' }}>
   Screen Fee (per color)
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 5, lg: 5, xl: 4.3}, display: 'flex', width: '50px' }}>
   350
 </Typography>
</Box>
<Box sx={{display: 'inline-flex'}}>
<Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 11.5}, display: 'flex', width: '150px' }}>
   Embro Program Fee
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 5, lg: 5, xl: 2.8}, display: 'flex', width: '50px' }}>
   1000
 </Typography>
</Box>
<Box sx={{display: 'inline-flex'}}>
<Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 16}, display: 'flex', width: '150px' }}>
   Sampling Fee
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 5, lg: 5, xl: -1.5}, display: 'flex', width: '100px' }}>
   2500 - 5000
 </Typography>
</Box>
<Box sx={{display: 'inline-flex'}}>
<Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 15}, ml: 15, display: 'flex', width: '150px' }}>
   Rush Fee / VIP
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 5, lg: 5, xl: -0.5}, display: 'flex', width: '100px' }}>
   3000 - 5000
 </Typography>
</Box> 

 </Grid>
 </Grid></Grid>
      </CardContent>

      </Card>
      </CardContent></Card>

{/* Sampling Cost Pattern */}

      <Card sx={{ backgroundColor: '#ffffff', boxShadow: 'none', outline: 'none', height: {xs: '500px', lg:'500px', xl: '300px'}, display: 'flex',
        justifyContent: 'center', mt: '-500px' }}>
            <CardContent>
            <Card sx={{ backgroundColor: '#f4f4f4', boxShadow: 'none', outline: 'none', width: {xs: '300px', lg: '450px', xl: '550px'}, height: {xs: '350px', lg: '300px', xl: '300px'}, display: 'flex',
            marginLeft: {lg: '150px', xl: '150px'},
        justifyContent: 'center',
        marginBottom: '100px', }}>
          <CardContent>
<Typography variant="h1" 
      gutterBottom 
      sx={{ 
        marginTop: '30px',
        marginLeft: '10px',
        fontWeight: 'bold', 
        fontSize: { xs: '0.8rem', lg: '1.2rem' },
        justifyContent: 'left',
        textAlign: 'left',
        textTransform: 'normal',
        fontFamily: 'Arimo',
        display: 'flex'
         // Adjust as needed
      }}> SAMPLING COST PATTERN</Typography>

<Grid container sx={{overflowX: {xs: 'auto'}}}>
 <Grid item xs={5}>
   <Grid container direction="column" alignItems="flex-start">
<Box sx={{display: 'inline-flex'}}>
<Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 1.5}, mt: 5, display: 'flex', width: '250px' }}>
   Product Price —  retail price
 </Typography>
</Box>
<Box sx={{display: 'inline-flex'}}>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 1.5}, mt: 2, display: 'flex', width: '350px' }}>
   Sampling Fee — cost may vary based on the difficulty
 </Typography>
 </Box>
 <Box sx={{display: 'inline-flex'}}>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 1.5}, mt: 2, display: 'flex', width: '250px' }}>
   Pattern Fee — add P250 fee per size
 </Typography>
 </Box>
 <Box sx={{display: 'inline-flex'}}>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 1.5}, mt: 2, display: 'flex', width: '250px' }}>
   If with print — add P500 fee per screen
 </Typography>
</Box>

 </Grid>
 </Grid></Grid>
      </CardContent>
      </Card>
      </CardContent></Card>

{/* Lead Time */}

<Card sx={{ backgroundColor: '#ffffff', boxShadow: 'none', outline: 'none', height: {xs: '500px', lg:'500px', xl: '300px'}, display: 'flex',
        justifyContent: 'center', mt: {lg: '-170px', xl: '30px' }}}>
            <CardContent>
            <Card sx={{ backgroundColor: '#f4f4f4', boxShadow: 'none', outline: 'none', width: {xs: '300px', lg: '450px', xl: '550px'}, height: {xs: '500px', lg: '220px', xl: '300px'}, display: 'flex',
            marginLeft: {lg: '150px', xl: '150px'},
        justifyContent: 'center',
        marginBottom: '200px', }}>
          <CardContent>
<Typography variant="h1" 
      gutterBottom 
      sx={{ 
        marginTop: '30px',
        marginLeft: '10px',
        fontWeight: 'bold', 
        fontSize: { xs: '0.8rem', lg: '1.2rem' },
        justifyContent: 'left',
        textAlign: 'left',
        textTransform: 'normal',
        fontFamily: 'Arimo',
        display: 'flex'
         // Adjust as needed
      }}> LEAD TIME</Typography>

<Grid container sx={{overflowX: {xs: 'auto'}}}>
 <Grid item xs={5}>
   <Grid container direction="column" alignItems="flex-start">
<Box sx={{display: 'inline-flex'}}>
<Typography variant="body1" gutterBottom sx={{ fontStyle: 'italic', fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 1}, mt: 2, display: 'flex', width: '250px' }}>
   Standard
 </Typography>
</Box>
<Box sx={{display: 'inline-flex'}}>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 1}, mt: 2, display: 'flex', width: '120px' }}>
   6 to 12 weeks <br/>(Add 10 days if with print/embro)
 </Typography>
 </Box>
 <Box sx={{display: 'inline-flex'}}>
 <Typography variant="body1" gutterBottom sx={{ fontStyle: 'italic', fontSize: '0.8rem', textDecoration: 'underline', ml: {xs: 40, lg: 20, xl: 28}, mt: -10, display: 'flex', width: '130px' }} align='justify'>
   Ask a line-up slot with our customer service.
 </Typography>
</Box>

 </Grid>
 </Grid></Grid>
      </CardContent>
      </Card>
      </CardContent></Card>

      {/* Embroidery */}

<Card sx={{ backgroundColor: '#ffffff', boxShadow: 'none', outline: 'none', height: {xs: '500px', lg:'500px', xl: '300px'}, display: 'flex',
        justifyContent: 'center', mt: {lg: '-500px', xl: '-630px'} }}>
            <CardContent>
            <Card sx={{ backgroundColor: '#f4f4f4', boxShadow: 'none', outline: 'none', width: {xs: '300px', lg: '250px', xl: '300px'}, height: {xs: '500px', lg: '220px', xl: '500px'}, display: 'flex',
            marginLeft: {lg: '905px', xl: '1120px'},
        justifyContent: 'center',
        marginBottom: '100px', }}>
          <CardContent>
<Typography variant="h1" 
      gutterBottom 
      sx={{ 
        marginTop: '30px',
        marginLeft: '160px',
        fontWeight: 'bold', 
        fontSize: { xs: '0.8rem', lg: '1.2rem' },
        justifyContent: 'left',
        textAlign: 'left',
        textTransform: 'normal',
        fontFamily: 'Arimo',
        display: 'flex'
         // Adjust as needed
      }}> EMBROIDERY</Typography>

<Grid container sx={{overflowX: {xs: 'auto'}}}>
 <Grid item xs={5}>
   <Grid container direction="column" alignItems="flex-start">
   <Box sx={{display: 'inline-flex'}}>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 20}, mt: 2,display: 'flex', width: '350px' }}>
   P80 - P150 PHP
 </Typography>
 </Box>
 <Box sx={{display: 'inline-flex'}}>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 20}, mt: 2, display: 'flex', width: '250px' }}>
   2" to 3" - Logo
 </Typography>
 </Box>
 <Box sx={{display: 'inline-flex'}}>
 <Typography variant="body1" gutterBottom sx={{ textDecoration: 'underline', fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 20}, mt: 2, display: 'flex', width: '250px' }}>
   Add P30 per inches
 </Typography>
</Box>
 </Grid>
 </Grid></Grid>
      </CardContent>
      </Card>
      </CardContent></Card>

            {/* Silkscreen Print */}

<Card sx={{ backgroundColor: '#ffffff', boxShadow: 'none', outline: 'none', height: {xs: '500px', lg:'500px', xl: '300px'}, display: 'flex',
        justifyContent: 'center', mt: {lg: '-830px', xl: '30px'}, marginBottom: '150px', }}>
            <CardContent>
            <Card sx={{ backgroundColor: '#f4f4f4', boxShadow: 'none', outline: 'none', width: {xs: '300px', lg: '250px', xl: '300px'}, height: {xs: '500px', lg: '300px', xl: '500px'}, display: 'flex',
            marginLeft: {lg: '905px', xl: '1120px'},
        justifyContent: 'center',
        marginBottom: '100px', }}>
          <CardContent>
<Typography variant="h1" 
      gutterBottom 
      sx={{ 
        marginTop: '30px',
        marginLeft: '160px',
        fontWeight: 'bold', 
        fontSize: { xs: '0.8rem', lg: '1.2rem' },
        justifyContent: 'left',
        textAlign: 'left',
        textTransform: 'normal',
        fontFamily: 'Arimo',
        display: 'flex'
         // Adjust as needed
      }}> SILKSCREEN PRINT</Typography>

<Grid container sx={{overflowX: {xs: 'auto'}}}>
 <Grid item xs={5}>
   <Grid container direction="column" alignItems="flex-start">
   <Box sx={{display: 'inline-flex'}}>
 <Typography variant="body1" gutterBottom sx={{ fontStyle: 'italic', fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 20}, mt: 2,display: 'flex', width: '350px' }}>
   Standard
 </Typography>
 </Box>
 <Box sx={{display: 'inline-flex'}}>
 <Typography variant="body1" gutterBottom sx={{ fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 20}, mt: 2, display: 'flex', width: '250px' }}>
   P95 - 1st color <br/>
   P130 - 2nd color <br/>
   P165 - 3rd color <br/>
 </Typography>
 </Box>
 <Box sx={{display: 'inline-flex'}}>
 <Typography variant="body1" gutterBottom sx={{ textDecoration: 'underline', fontSize: '0.8rem', ml: {xs: 40, lg: 20, xl: 20}, mt: 2, display: 'flex', width: '250px' }}>
   Add 35 for <br/>succeeding colors
 </Typography>
</Box>
 </Grid>
 </Grid></Grid>
      </CardContent>
      </Card>
      </CardContent></Card>

   <ResponsiveFooter position='bottom' />
   </ThemeProvider>
</>
  )
}

export default App