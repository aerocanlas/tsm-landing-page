//productretail.js

import React, { useState } from 'react'
import Navbar from '../Navbar'
import ResponsiveFooter from '../ResponsiveFooter'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import NavbarRetail from '../Retail/NavbarRetail'
import Fab from '@mui/material/Fab';
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";

const ProductRetail = () => {
  const [isHoveredHoodie, setIsHoveredHoodie] = useState(false);
  const [isHoveredPullover, setIsHoveredPullover] = useState(false);
  const [isHoveredShirt, setIsHoveredShirt] = useState(false);
  const [isHoveredShort, setIsHoveredShort] = useState(false);
  const [isHoveredPants, setIsHoveredPants] = useState(false);

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

    function setNewImage() {
        const shirtImage = document.getElementById('ShirtV2');
        if (shirtImage) {
          shirtImage.src = 'images/ShirtV2.png';
        }
      }
      
      function setOldImage() {
        const hoodieImage = document.getElementById('HoodieV2');
        if (hoodieImage) {
          hoodieImage.src = 'images/HoodieV2.png';
        }
      }
      
  return (
    <>
    
    <Navbar position="static" color="transparent"/>

    <Box sx={{height: '1500px', 
    marginBottom: {lg: '-300px', xl: 0}}}>

    <Typography variant="h1" 
      gutterBottom 
      sx={{ 
        fontSize: '1.2rem', 
        textAlign: 'center',
        textTransform: 'normal',
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '100px', xl: '80px'},
        marginBottom: {xs: '50px', lg: '100px', xl: '150px'},
        marginLeft: {xs: '50px', lg: '50px', xl: '30px'},
         // Adjust as needed
      }}> Our Products</Typography>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',}}>

<Box
  component="img"
  width="100%"
  height="auto"
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
    maxHeight: { xs:  233, md:  167, lg: '50%' },
    maxWidth: { xs:  350, md:  250, lg: '25%' },
    marginLeft: { xl:  10 },
    transition: 'transform  0.3s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
    },
  }}
  alt="The house from the offer."
  src={isHoveredHoodie ? '/images/TSM-Hoodie V2-Navy-Blue.png' : '/images/HoodieV2.png'}
  onMouseEnter={() => setIsHoveredHoodie(true)}
  onMouseLeave={() => setIsHoveredHoodie(false)}
/>

<Box
      component="img"
      width="100%"
      height="auto"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
        maxHeight: { xs: 233, md: 167, lg: '50%' },
        maxWidth: { xs: 350, md: 250, lg: '25%'},
        marginLeft: {lg: 5, xl: 10},
        marginRight: {lg: 3},
        transition: 'transform  0.3s ease-in-out',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      alt="The house from the offer."
      src={isHoveredPullover ? '/images/TSM-Pullover-Beige.png' : '/images/PulloverV2.png'}
      onMouseEnter={() => setIsHoveredPullover(true)}
      onMouseLeave={() => setIsHoveredPullover(false)}
    />

<Box
      component="img"
      width="100%"
      height="auto"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
        maxHeight: { xs: 233, md: 167, lg: '50%' },
        maxWidth: { xs: 350, md: 250, lg: '25%'},
        marginLeft: {xl: 10},
        transition: 'transform  0.3s ease-in-out',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      alt="The house from the offer."
      src={isHoveredShirt ? '/images/TSM-Skater-Fit-Rust.png' : '/images/ShirtV2.png'}
      onMouseEnter={() => setIsHoveredShirt(true)}
      onMouseLeave={() => setIsHoveredShirt(false)}
    />
      </Box>
<Box  sx={{
        display: 'flex',}}>   
<Box>
<Typography variant="h1" 
      gutterBottom 
      sx={{ 
        fontSize: '1rem', 
        textAlign: 'left',
        textTransform: 'normal',
        color: '#646464',
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '20px', xl: '20px'},
        marginBottom: {xs: '50px', lg: '10px', xl: '10px'},
        marginLeft: {lg: '250px', xl: '220px'}
         // Adjust as needed
      }}> TSM Hoodie V2</Typography>
            <Typography variant="h1" 
      gutterBottom 
      sx={{ 
        fontSize: '1rem', 
        textAlign: 'left',
        textTransform: 'normal',
        fontFamily: 'Arimo',
        color: '#646464',
        marginTop: {xs: '100px', lg: '0px', xl: '5px'},
        marginBottom: {xs: '50px', lg: '50px', xl: '50px'},
        marginLeft: {lg: '250px', xl: '220px'}
         // Adjust as needed
      }}> 999 PHP</Typography>

<Box sx={{marginLeft: {lg: '240px', xl: '210px'}}}>
<Box sx={{  display: 'flex',
marginTop: '-50px', }}>
<Fab size="small" 
sx={{
background: '#000000',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(0, 0, 0, 0.8)', 
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#090050',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(84, 35, 14, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#5C4033',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(9, 0, 80, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#C4A484',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(0, 43, 20, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#d3d3d3',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(216, 216, 216, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#ce0016',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(216, 216, 216, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

</Box>
</Box>
</Box>

<Box sx={{marginLeft: '250px'}}>
    {/* pullover */}

<Typography variant="h1" 
      gutterBottom 
      sx={{ 
        fontSize: '1rem', 
        textAlign: 'left',
        textTransform: 'normal',
        color: '#646464',
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '20px', xl: '20px'},
        marginBottom: {xs: '50px', lg: '10px', xl: '10px'},
        marginLeft: {lg: '-120px', xl: '50px'}
         // Adjust as needed
      }}> TSM Pullover V2</Typography>
            <Typography variant="h1" 
      gutterBottom 
      sx={{ 
        fontSize: '1rem', 
        textAlign: 'left',
        textTransform: 'normal',
        color: '#646464',
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '0px', xl: '5px'},
        marginBottom: {xs: '50px', lg: '50px', xl: '50px'},
        marginLeft: {lg: '-120px', xl: '50px'}
         // Adjust as needed
      }}>649 PHP</Typography>
<Box sx={{marginLeft: {lg: '-135px', xl: '40px'}}}>
<Box sx={{  display: 'flex',
marginTop: '-50px', }}>
<Fab size="small" 
sx={{
background: '#000000',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(0, 0, 0, 0.8)', 
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#090050',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(84, 35, 14, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#5C4033',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(9, 0, 80, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#C4A484',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(0, 43, 20, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#d3d3d3',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(216, 216, 216, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#ce0016',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(216, 216, 216, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

</Box>
</Box>
</Box>

<Box>
<Typography variant="h1" 
      gutterBottom 
      sx={{ 
        fontSize: '1rem', 
        textAlign: 'left',
        textTransform: 'normal',
        color: '#646464',
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '20px', xl: '20px'},
        marginBottom: {xs: '50px', lg: '10px', xl: '10px'},
        marginLeft: {lg: '140px', xl: '380px'}
         // Adjust as needed
      }}> Skater Fit</Typography>
            <Typography variant="h1" 
      gutterBottom 
      sx={{ 
        fontSize: '1rem', 
        textAlign: 'left',
        textTransform: 'normal',
        color: '#646464',
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '0px', xl: '5px'},
        marginBottom: {xs: '50px', lg: '50px', xl: '50px'},
        marginLeft: {lg: '140px', xl: '380px'}
         // Adjust as needed
      }}> 499 PHP</Typography>

<Box sx={{marginLeft: {lg: '125px', xl: '365px'}}}>
<Box sx={{  display: 'flex',
marginTop: '-50px', }}>
<Fab size="small" 
sx={{
background: '#000000',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(0, 0, 0, 0.8)', 
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#090050',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(84, 35, 14, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#5C4033',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(9, 0, 80, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#C4A484',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(0, 43, 20, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#d3d3d3',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(216, 216, 216, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#ce0016',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(216, 216, 216, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

</Box>
</Box>
</Box>

</Box>   


      <Box sx={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',}}> 
        
        <Box
      component="img"
      width="100%"
      height="auto"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '80px',
        maxHeight: { xs: 233, md: 167, lg: '50%' },
        maxWidth: { xs: 350, md: 250, lg: '25%'},
        marginLeft: {lg: 23, xl: 20},
        transition: 'transform  0.3s ease-in-out',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      alt="The house from the offer."
      src={isHoveredShort ? '/images/TSM-Shorts-V2-Black.png' : '/images/ShortV2.png'}
      onMouseEnter={() => setIsHoveredShort(true)}
      onMouseLeave={() => setIsHoveredShort(false)}
    />

<Box
      component="img"
      width="100%"
      height="auto"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '80px',
        maxHeight: { xs: 233, md: 167, lg: '50%' },
        maxWidth: { xs: 350, md: 250, lg: '25%'},
        marginLeft: {xl: 10},
        transition: 'transform  0.3s ease-in-out',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      alt="The house from the offer."
      src={isHoveredPants ? '/images/TSM-Sweatpants-V2-Heather-Gray.png' : '/images/PantsV2.png'}
      onMouseEnter={() => setIsHoveredPants(true)}
      onMouseLeave={() => setIsHoveredPants(false)}
    />

        </Box>
        <Box  sx={{
        display: 'flex',}}>  
        <Box>
<Typography variant="h1" 
      gutterBottom 
      sx={{ 
        fontSize: '1rem', 
        textAlign: 'left',
        textTransform: 'normal',
        color: '#646464',
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '20px', xl: '20px'},
        marginBottom: {xs: '50px', lg: '10px', xl: '10px'},
        marginLeft: {lg: '210px', xl: '230px'}
         // Adjust as needed
      }}> TSM Sweatshorts V2 </Typography>
            <Typography variant="h1" 
      gutterBottom 
      sx={{ 
        fontSize: '1rem', 
        textAlign: 'left',
        textTransform: 'normal',
        color: '#646464',
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '0px', xl: '5px'},
        marginBottom: {xs: '50px', lg: '50px', xl: '50px'},
        marginLeft: {lg: '210px', xl: '230px'}
         // Adjust as needed
      }}> 599 PHP</Typography>

<Box sx={{marginLeft: {lg: '195px', xl: '220px'}}}>
<Box sx={{  display: 'flex',
marginTop: '-50px', }}>
<Fab size="small" 
sx={{
background: '#000000',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(0, 0, 0, 0.8)', 
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#090050',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(84, 35, 14, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#5C4033',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(9, 0, 80, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#C4A484',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(0, 43, 20, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#d3d3d3',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(216, 216, 216, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#ce0016',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(216, 216, 216, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

</Box>
</Box>
</Box>

<Box>
<Typography variant="h1" 
      gutterBottom 
      sx={{ 
        fontSize: '1rem', 
        textAlign: 'left',
        textTransform: 'normal',
        color: '#646464',
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '10px', xl: '20px'},
        marginBottom: {xs: '50px', lg: '10px', xl: '10px'},
        marginLeft: {lg: '150px', xl: '340px'}
         // Adjust as needed
      }}> TSM Sweatpants V2 </Typography>
            <Typography variant="h1" 
      gutterBottom 
      sx={{ 
        fontSize: '1rem', 
        textAlign: 'left',
        textTransform: 'normal',
        color: '#646464',
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '0px', xl: '5px'},
        marginBottom: {xs: '50px', lg: '50px', xl: '50px'},
        marginLeft: {lg: '150px', xl: '340px'}
         // Adjust as needed
      }}> 749 PHP</Typography>

<Box sx={{marginLeft: {lg: '135px', xl: '325px'}}}>
<Box sx={{  display: 'flex',
marginTop: '-50px', }}>
<Fab size="small" 
sx={{
background: '#000000',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(0, 0, 0, 0.8)', 
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#090050',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(84, 35, 14, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#5C4033',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(9, 0, 80, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#C4A484',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(0, 43, 20, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#d3d3d3',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(216, 216, 216, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

<Fab size="small" 
sx={{
background: '#ce0016',
borderRadius: '50%', // To make the button circular
boxShadow: 'none', // Remove shadow
transform: 'scale(0.4)',
'&:hover': {
backgroundColor: 'rgba(216, 216, 216, 0.8)',
transition: '0.5s ease'
},
'&:active': {
transform: 'scale(0.8)', // Shrink the button when clicked
},
}}>
</Fab>

</Box>
</Box>
</Box>


</Box>

    </Box>

    <ResponsiveFooter position="bottom"/>
    </>
  )
}

export default ProductRetail