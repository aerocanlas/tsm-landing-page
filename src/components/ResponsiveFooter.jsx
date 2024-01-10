import * as React from 'react';
import { Box, Grid, Link, Typography, Container, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// Replace these with your own social media URLs
const socialMediaLinks = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
};

const ResponsiveFooter= () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        color: 'text.secondary',
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            {/* Add your logo component or image here */}
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Support
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{textDecoration: 'none'}}>FAQs</Link>
            <Link href="#" color="inherit" display="block" sx={{textDecoration: 'none'}}>Shipping</Link>
            <Link href="#" color="inherit" display="block" sx={{textDecoration: 'none'}}>Size Guide</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              COMPANY
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{textDecoration: 'none'}}>About</Link>
            <Link href="#" color="inherit" display="block" sx={{textDecoration: 'none'}}>Team</Link>
            <Link href="#" color="inherit" display="block" sx={{textDecoration: 'none'}}>Career</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Social
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{textDecoration: 'none'}}>Facebook</Link>
            <Link href="#" color="inherit" display="block" sx={{textDecoration: 'none'}}>Instagram</Link>
            <Link href="#" color="inherit" display="block" sx={{textDecoration: 'none'}}>Shopee</Link>
            <Link href="#" color="inherit" display="block" sx={{textDecoration: 'none'}}>Lazada</Link>
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