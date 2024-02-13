import React, { useRef } from 'react';
import { Typography, Box, Card, CardContent,} from '@mui/material'
import { ThemeProvider, createTheme  } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveFooter from '../components/ResponsiveFooter';
import Navbar from '../components/Navbar';
import emailjs from '@emailjs/browser';
import "../Styles/StyledContactForm.css";

const Contact = () => {

  const theme = createTheme({
    palette: {
      background: {
        default: "#f4f4f4"
      }
    }
   });

   const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_s85ph3n', 'template_pxn2mkt', form.current,
        'o3uRYWGizNNxEQUYD',
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <title>The Street Market | Contact </title>
       <ThemeProvider theme={theme}>
     <CssBaseline />
     <Navbar position="static" color="transparent"/>
    <Box sx={{ml: {lg: '-330px', xl: '-500px'}, display: 'flex',  justifyContent: 'center', alignItems: 'center', marginTop: '100px', marginBottom: '100px'}}>
    <Box
      component="img"
      sx={{
        minHeight: { xs: 350, md: 250, lg: 450, xl: 500 }, // Add this line
        maxWidth: { xs: 350, md: 250, lg: 580, xl: 700 },// Add this line
        marginTop: '-300px',
        marginBottom: '-300px',
        position: 'relative',
        left: '200px',
        zIndex: '150px'
      }}
      alt=""
      src="/images/Contact1.png"
    />  
    <Card sx={{ backgroundColor: '#ffffff', boxShadow: 'none', outline: 'none', width: '500px', height: '700px', display: 'flex',
        justifyContent: 'center', alignItems: 'center', }}>
            <CardContent>
            <Typography 
      variant="h3" 
      gutterBottom 
      sx={{ 
        ml: '15px',
        fontSize: '1.2rem', 
        fontWeight: 'bold', 
        textAlign: 'left',
        fontFamily: 'Arimo',
        textTransform: 'normal',
        marginTop: '50px' // Adjust as needed
      }}
  >
 Contact</Typography>
 <Box
      sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <form ref={form} onSubmit={sendEmail}>
          <label>Name *</label>
          <input type="text" name="user_name" required/>
          <label>Email *</label>
          <input type="email" name="user_email" required/>
          <label>Phone Number *</label>
          <input type="text" name="user_phone" required/>
          <label>Order Number</label>
          <input type="text" name="user_order" />
          <label>Message *</label>
          <textarea name="message" required/>
          <input type="submit" value="Send" />
    </form>
    
      {/* <TextField id="standard-basic" label="Name" variant="standard" />
      <TextField id="standard-email-basic" label="Email" variant="standard" />
      <TextField id="standard-basic" label="Phone" variant="standard" />
      <TextField id="standard-basic" label="Order Number (Optional)" variant="standard" />
      <TextField
      variant="standard"
      id="standard-basic"
        label='Message'
        multiline
        rows={2}
        maxRows={4}
      /> */}
      {/* <Button variant="standard"> Submit
          <Typography variant='body1' sx={{color: '#d3d3d3', '&:hover': {
          color: '#000000', 
          transition: '0.5s ease'
        }, }}>Submit</Typography> 
        </Button> */}
    </Box>



              </CardContent>
              </Card>
              <Box
      component="img"
      sx={{
        minHeight: { xs: 350, md: 250, lg: 150, xl: 180 }, // Add this line
        maxWidth: { xs: 350, md: 250, lg: 250, xl: 280 },// Add this line
        marginTop: '-300px',
        marginBottom: '-300px',
        position: 'relative',
        left: '-40px',
        zIndex: '150px'
      }}
      alt=""
      src="/images/Contact2.png"
    /> </Box>
     
   <ResponsiveFooter position="bottom"/>
   </ThemeProvider>
</>
  )
}

export default Contact;
