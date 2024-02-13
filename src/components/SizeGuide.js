import * as React from 'react'
import { Typography, Box,  } from '@mui/material'
import Navbar from './Navbar'
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveFooter from './ResponsiveFooter';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views-react-18-fix';
// import { autoPlay } from 'react-swipeable-views-utils';


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#ffffff', 
    boxShadow: 'none', 
    outline: 'none',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const images   = [
    {
      imgPath: '/images/Hoodie-2.png',
      label: 'Hoodie',

    },
    {
      imgPath: '/images/Pullover-1.png',
      label: 'Pullover',
    },
    {
      imgPath: '/images/Skater-Fit.png',
      label: 'Skater Fit',
    },
    {
      imgPath: '/images/Sweat-Pants.png',
      label: 'Sweat Pants',
    },
    {
      imgPath: '/images/Sweat-Shorts.png',
      label: 'Sweat Shorts',
    },
  ];


  const theme = createTheme({
    palette: {
      background: {
        default: "#f4f4f4"
      }
    },
    Typography: [
      'Arimo',
      'sans-serif',
    ].join(',')
   });
  function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

       

  return (
    <>
    <title>The Street Market | Size Guide </title>
    <ThemeProvider theme={theme}>
     <CssBaseline />
     <Navbar position="static" color="transparent">
   </Navbar>

   <Typography 
      variant="h3" 
      gutterBottom 
      sx={{ 
        fontSize: { xs: '0.9em', sm: '1rem', md: '1rem', lg: '1rem', xl: '1.2rem' }, 
        textAlign: 'center', 
        marginTop: { xs: '-320px', sm: '100px', md: '-70px', lg: '100px', xl: '50px' }, // Adjust as needed
        marginBottom: { xs: '50px', sm: '', md: '30px', lg: '10px' }
      }}
  >
SIZE GUIDE
</Typography>

<Box sx={{ maxWidth: 700, flexGrow: 1,
 ml: {lg: '335px', xl: '600px'},
 marginBottom: '100px'
 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        {/* <Typography>{images[activeStep].label}</Typography> */}
      </Paper>
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 800,
                  display: 'block',
                  width: 700,
                  overflow: 'hidden',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{color: 'black'}}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{color: 'black'}}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
        sx={{
          '& .MuiMobileStepper-dot': {
            backgroundColor: 'gray',
          },
          '& .MuiMobileStepper-dotActive': {
            backgroundColor: 'black',
          },
        }}
      />
    </Box>

   <ResponsiveFooter position="bottom"/>
   </ThemeProvider>
</>
  )
}

export default SwipeableTextMobileStepper