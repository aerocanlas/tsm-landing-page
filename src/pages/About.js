import React from 'react';
import { Typography, Grid, Box, Card, CardContent } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveFooter from '../components/ResponsiveFooter';
import Navbar from "../components/Navbar";

const About = () => {

  const theme = createTheme({
    palette: {
      background: {
        default: "#f4f4f4"
      }
    }
  });

  return (
    <>
      <title>The Street Market | About</title>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar position="static" color="transparent"/>
        <Box >
          <Grid>
            <Grid item xs={12} sm={6} md={20}>
              <Card sx={{ backgroundColor: '#f4f4f4', boxShadow: 'none', outline: 'none', height: '200vh', width: '100% ', display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: {lg: '-15%', xl: '-15%'}
                 }}>
                <CardContent>
                <Box
  sx={{
    minHeight: { xs:   350, md:   250, lg:   750, xl:   1000 },
    width: ['100%', '100%', '100%', '100%', '100%'],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <video
    autoPlay
    loop
    playsInline
    width="100%"
    height="auto"
  >
    <source src="/images/About-Vid.mp4" type="video/mp4" />
  </video>
</Box>

                  <Box sx={{ backgroundColor: '#ffffff', boxShadow: 'none', outline: 'none', width: '100%', display: 'flex',
                      justifyContent: 'center', marginTop: {xl: '-9%'}, marginBottom: {lg: '-250px', xl: '-700px'}, pl: 5, pr: 4
                       }}>
                    <Card sx={{boxShadow: 'none', outline: 'none',}}>
                      <CardContent>
                         <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Box sx={{ flex:  1, pl: 5, pr:  5 }}>
                                <Typography variant="h1"  
                                gutterBottom  
                                sx={{  
                                    fontSize: '1rem',  
                                    textAlign: 'left',
                                    textTransform: 'normal',
                                    fontFamily: 'Arimo',
                                    fontWeight: 'bold',
                                    marginTop: {xs: '100px', lg: '100px', xl: '100px'},
                                    marginBottom: {xs: '20px', lg: '20px', xl: '20px'},
                                }}>
                                SUPERIOR QUALITY
                                </Typography>
                                <Typography variant="body2"  
                                gutterBottom  
                                sx={{  
                                    fontSize: '0.8rem',  
                                    textAlign: 'justify',
                                    width: '350px',
                                    textTransform: 'normal',
                                    fontFamily: 'Arimo',
                                    marginBottom: {xs: '50px', lg: '100px', xl: '100px'},
                                    // Adjust as needed
                                }}>
                                Our superior craftsmanship, exceptional quality, and buttery soft fabric have established us as the go-to apparel company for top brands around the Philippines.
                                </Typography>
                        </Box>
                        <Box sx={{ flex:  1, pl:  2, pr: 2 }}>
                                <Typography variant="h1"  
                                gutterBottom  
                                sx={{  
                                    fontSize: '1rem',  
                                    textAlign: 'left',
                                    textTransform: 'normal',
                                    fontFamily: 'Arimo',
                                    fontWeight: 'bold',
                                    marginTop: {xs: '100px', lg: '100px', xl: '100px'},
                                    marginBottom: {xs: '20px', lg: '20px', xl: '20px'},
                                    // Adjust as needed
                                }}>
                                BETTER BLANKS
                                </Typography>
                                <Typography variant="body2"  
                                gutterBottom  
                                sx={{  
                                    fontSize: '0.8rem',  
                                    textAlign: 'justify',
                                    width: '350px',
                                    textTransform: 'normal',
                                    fontFamily: 'Arimo',
                                    marginBottom: {xs: '50px', lg: '100px', xl: '100px'},
                                    // Adjust as needed
                                }}>
                                Basics shouldn't be complicated - we're here to simplify it for you. We've fine-tuned and finessed our styles, bringing you elevated, quality threads. 
                                </Typography>
                          </Box>
                          <Box sx={{ flex:  1, pl:  5, pr: 5 }}>
                                <Typography variant="h1"  
                                gutterBottom  
                                sx={{  
                                    fontSize: '1rem',  
                                    textAlign: 'left',
                                    textTransform: 'normal',
                                    fontFamily: 'Arimo',
                                    fontWeight: 'bold',
                                    marginTop: {xs: '100px', lg: '100px', xl: '100px'},
                                    marginBottom: {xs: '20px', lg: '20px', xl: '20px'},
                                    // Adjust as needed
                                }}>
                                SMALL BUSINESS ORIENTED
                                </Typography>
                                <Typography variant="body2"  
                                gutterBottom  
                                sx={{  
                                    fontSize: '0.8rem',  
                                    textAlign: 'justify',
                                    width: '350px',
                                    textTransform: 'normal',
                                    fontFamily: 'Arimo',
                                    marginBottom: {xs: '50px', lg: '100px', xl: '100px'},
                                    // Adjust as needed
                                }}>
                                It's actually more cost-effective for you to go through a full service so that you may have full package support – meaning they will be able to help you from the ground up.
                                </Typography>
                        </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <ResponsiveFooter position="bottom"/>
      </ThemeProvider>
    </>
  );
};

export default About;