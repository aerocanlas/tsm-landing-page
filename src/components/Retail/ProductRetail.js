import React from 'react'
import Navbar from '../Navbar'
import ResponsiveFooter from '../ResponsiveFooter'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import NavbarRetail from '../Retail/NavbarRetail'
import Fab from '@mui/material/Fab';

const ProductRetail = () => {

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

    <Box sx={{height: '1500px'}}>

    <Typography variant="h1" 
      gutterBottom 
      sx={{ 
        fontSize: '1.2rem', 
        textAlign: 'center',
        textTransform: 'normal',
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '100px', xl: '80px'},
        marginBottom: {xs: '50px', lg: '100px', xl: '150px'},
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
        marginTop: '-80px',
        maxHeight: { xs: 233, md: 167, lg: '50%' },
        maxWidth: { xs: 350, md: 250, lg: '25%'},
        marginLeft: {xl: 0}
      }}
      alt="The house from the offer."
      src="/images/HoodieV2.png"
    /> 




<Box
      component="img"
      width="100%"
      height="auto"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-80px',
        maxHeight: { xs: 233, md: 167, lg: '50%' },
        maxWidth: { xs: 350, md: 250, lg: '25%'},
        marginLeft: {xl: 10}
      }}
      alt="The house from the offer."
      src="/images/PulloverV2.png"
    /> 

<Box
      component="img"
      width="100%"
      height="auto"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-80px',
        maxHeight: { xs: 233, md: 167, lg: '50%' },
        maxWidth: { xs: 350, md: 250, lg: '25%'},
        marginLeft: {xl: 10}
      }}
      alt="The house from the offer."
      src="/images/ShirtV2.png"
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
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '100px', xl: '20px'},
        marginBottom: {xs: '50px', lg: '100px', xl: '10px'},
        marginLeft: {xl: '220px'}
         // Adjust as needed
      }}> TSM Hoodie V2</Typography>
            <Typography variant="h1" 
      gutterBottom 
      sx={{ 
        fontSize: '1rem', 
        textAlign: 'left',
        textTransform: 'normal',
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '100px', xl: '5px'},
        marginBottom: {xs: '50px', lg: '100px', xl: '50px'},
        marginLeft: {xl: '220px'}
         // Adjust as needed
      }}> PHP 999.00</Typography>

<Box sx={{marginLeft: '210px'}}>
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
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '100px', xl: '20px'},
        marginBottom: {xs: '50px', lg: '100px', xl: '10px'},
        marginLeft: {xl: '50px'}
         // Adjust as needed
      }}> TSM Pullover V2</Typography>
            <Typography variant="h1" 
      gutterBottom 
      sx={{ 
        fontSize: '1rem', 
        textAlign: 'left',
        textTransform: 'normal',
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '100px', xl: '5px'},
        marginBottom: {xs: '50px', lg: '100px', xl: '50px'},
        marginLeft: {xl: '50px'}
         // Adjust as needed
      }}> PHP 649.00</Typography>
<Box sx={{marginLeft: '40px'}}>
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
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '100px', xl: '20px'},
        marginBottom: {xs: '50px', lg: '100px', xl: '10px'},
        marginLeft: {xl: '380px'}
         // Adjust as needed
      }}> Skater Fit</Typography>
            <Typography variant="h1" 
      gutterBottom 
      sx={{ 
        fontSize: '1rem', 
        textAlign: 'left',
        textTransform: 'normal',
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '100px', xl: '5px'},
        marginBottom: {xs: '50px', lg: '100px', xl: '50px'},
        marginLeft: {xl: '380px'}
         // Adjust as needed
      }}> PHP 499.00</Typography>

<Box sx={{marginLeft: '370px'}}>
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
        marginLeft: {xl: 20}
      }}
      alt="The house from the offer."
      src="/images/ShortV2.png"
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
        marginLeft: {xl: 10}
      }}
      alt="The house from the offer."
      src="/images/PantsV2.png"
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
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '100px', xl: '20px'},
        marginBottom: {xs: '50px', lg: '100px', xl: '10px'},
        marginLeft: {xl: '230px'}
         // Adjust as needed
      }}> TSM Sweatshorts V2 </Typography>
            <Typography variant="h1" 
      gutterBottom 
      sx={{ 
        fontSize: '1rem', 
        textAlign: 'left',
        textTransform: 'normal',
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '100px', xl: '5px'},
        marginBottom: {xs: '50px', lg: '100px', xl: '50px'},
        marginLeft: {xl: '230px'}
         // Adjust as needed
      }}> PHP 599.00</Typography>

<Box sx={{marginLeft: '220px'}}>
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
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '100px', xl: '20px'},
        marginBottom: {xs: '50px', lg: '100px', xl: '10px'},
        marginLeft: {xl: '340px'}
         // Adjust as needed
      }}> TSM Sweatpants V2 </Typography>
            <Typography variant="h1" 
      gutterBottom 
      sx={{ 
        fontSize: '1rem', 
        textAlign: 'left',
        textTransform: 'normal',
        fontFamily: 'Arimo',
        marginTop: {xs: '100px', lg: '100px', xl: '5px'},
        marginBottom: {xs: '50px', lg: '100px', xl: '50px'},
        marginLeft: {xl: '340px'}
         // Adjust as needed
      }}> PHP 749.00</Typography>

<Box sx={{marginLeft: '330px'}}>
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