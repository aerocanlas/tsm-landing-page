import * as React from 'react';
import { Box, Grid, Typography, Container, IconButton, } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router';
import { useParams, useNavigate } from 'react-router-dom';

// Replace these with your own social media URLs
const socialMediaLinks = {
  facebook: 'https://www.facebook.com/thestreetmarket.ph',
  instagram: 'https://instagram.com/thestreet.market',
  shopee: 'https://shopee.ph/thestreetmarket',
  lazada: 'https://s.lazada.com.ph/s.8tRvK',
};

const ResponsiveFooter= () => {

  const navigate = useNavigate();
  
  return (
    <Box
      sx={{
        bgcolor: '#f4f4f4',
        color: 'text.secondary',
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={0.2} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            {/* Add your logo component or image here */}
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography marginTop='70px' variant="subtitle1" color="text.primary" gutterBottom fontWeight='bold' sx={{ml: {xs: '50px'}}}>
              Support
            </Typography>
            <Link to="/FAQs" color="inherit" display="block" style={{color: 'black', textDecoration: 'none'}}> <Typography sx={{display: 'block', fontSize:'14px', ml: {xs: '50px'}}}>FAQ's</Typography></Link>
            <Link to="#" color="inherit" display="block" style={{color: 'black', textDecoration: 'none'}}><Typography sx={{display: 'block', fontSize:'14px', ml: {xs: '50px'}}}>Shipping</Typography></Link>
            <Link to="#" color="inherit" display="block" style={{color: 'black', textDecoration: 'none'}}><Typography sx={{display: 'block', fontSize:'14px', marginBottom: '50px', ml: {xs: '50px'}}}>Size Guide</Typography></Link>
            {/* <Link href="#" color="inherit" display="block" sx={{textDecoration: 'none'}}>Shipping</Link>
            <Link href="#" color="inherit" display="block" sx={{textDecoration: 'none'}}>Size Guide</Link> */}
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography marginTop='70px' variant="subtitle1" color="text.primary" gutterBottom fontWeight='bold' sx={{ml: {xs: '50px'}}}>
              Company
            </Typography>
            <Link to="/Pullover" color="inherit" display="block" style={{color: 'black', textDecoration: 'none'}}> <Typography sx={{display: 'block', fontSize:'14px', ml: {xs: '50px'}}}>About</Typography></Link>
            <Link to="/Teams" color="inherit" display="block" style={{color: 'black', textDecoration: 'none'}}><Typography sx={{display: 'block', fontSize:'14px', ml: {xs: '50px'}}}>Teams</Typography></Link>
            <Link to="#" color="inherit" display="block" style={{color: 'black', textDecoration: 'none'}}><Typography sx={{display: 'block', fontSize:'14px', marginBottom: '50px', ml: {xs: '50px'}}}>Career</Typography></Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography marginTop='70px' variant="subtitle1" color="text.primary" gutterBottom fontWeight='bold' sx={{ml: {xs: '50px'}}}>
              Social
            </Typography>
            <Link to={socialMediaLinks.facebook} color="inherit" display="block" style={{color: 'black', textDecoration: 'none'}}> <Typography sx={{display: 'block', fontSize:'14px', ml: {xs: '50px'}}}>Facebook</Typography></Link>
            <Link to={socialMediaLinks.instagram} color="inherit" display="block" style={{color: 'black', textDecoration: 'none'}}><Typography sx={{display: 'block', fontSize:'14px', ml: {xs: '50px'}}}>Instagram</Typography></Link>
            <Link to={socialMediaLinks.shopee} color="inherit" display="block" style={{color: 'black', textDecoration: 'none'}}><Typography sx={{display: 'block', fontSize:'14px', ml: {xs: '50px'}}}>Shopee</Typography></Link>
            <Link to={socialMediaLinks.lazada} color="inherit" display="block" style={{color: 'black', textDecoration: 'none'}}><Typography sx={{display: 'block', fontSize:'14px', marginBottom: '50px', ml: {xs: '50px'}}}>Lazada</Typography></Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
          © 2024 The Street Market. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default ResponsiveFooter;