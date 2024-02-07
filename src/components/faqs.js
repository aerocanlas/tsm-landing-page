import React from 'react'
import { Typography } from '@mui/material'
import Navbar from './Navbar'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import ResponsiveFooter from './ResponsiveFooter';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQs = () => {

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
    <title>The Street Market | FAQ's</title>
       <ThemeProvider theme={theme}>
     <CssBaseline />
     <Navbar position="static" color="transparent">
   </Navbar>
   <Typography variant="h3" gutterBottom sx={{ fontFamily: 'Arimo', fontSize: {lg: '1.2rem', xl: '1.1em'}, textDecoration: 'underline', ml: 24.5, mt: 5 }}>
    FREQUENTLY ASKED QUESTIONS
  </Typography>

  <Typography      
      variant="h3" 
      gutterBottom 
      sx={{ fontSize: {lg: '0.8rem', xl: '1.1em'}, ml: 24.5, mt: 5 }}>
Manufacturing fashion brands — especially as a startup clothing brands — is an intricate process. There are many considerations and many questions you may have.
<br/><br/>
Our Frequently Asked Questions (FAQ's) can answer some basic and essential questions regarding apparel manufacturing and our services.
<br/>Please make sure you check this page before contacting us.
</Typography>

<div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ fontFamily: 'Arimo', fontSize: {lg: '1rem', xl: '1.1em'}, fontStyle: 'bold', ml: 22.5, mt: 5 }}>GENERAL</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
 <Grid item xs={6}>
   <Grid container direction="column" alignItems="flex-start">
   <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mt: 1 }}>
    What is your Minimum Order Quantity?
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mt: 10 }}>
    What are the products you manufactured?
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mt: 10 }}>
    What are the production costs?
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mt: 15 }}>
    Can I order a sample before ordering?
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mt: 27 }}>
    Do I need tech-pack?
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mr: 15, mt: 10 }}>
    What is the difference between retail and wholesale in terms of manufacturing?
 </Typography>

   </Grid>
 </Grid>

 <Grid item xs={6}>
   <Grid container direction="column" justifyContent="flex-end">
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 1 }} align="justify">
    Our minimum order quantity for domestic production is 50 pieces per every style with one color only. Fifty pieces per every style in two different colors.
 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 9 }} align="justify">
    THE STREET MARKET™ is well-known for manufacturing high-quality hoodies, sweaters, shirts, shorts, sweatpants, and tote bags.
 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 8 }} align="justify">
    The cost of production is dependent on many variables including fabric material, fabric colors, thickness, quantity, construction, attachments, number of print colors, etc. We cannot provide a blanket cost estimate for any garment without specific garment details or viewing the construction and fabric. Please refer to our Request a Quote by filling out the Application Form and provide the required details to receive a fair cost estimate.
 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 7 }} align="justify">
    THE STREET MARKET™ creates a 1st pattern and pre-production sample upon the committing to a production order. The 1st pattern is free of charge with production orders meeting our MOQs. It is an initial upfront charge, but is later rebated or applied to your production order. However: free pre-production samples cannot be created until we have received the production order deposit (or commitment?) 
    <br/><br/>
    If you would like a sample before putting in a production order, we can accommodate that request — While we can technically produce a finished sample for any garment, the cost of a sample can be prohibitively expensive in small orders. In small run orders, it is simply not cost effective to request a sample. If you want a sample no matter what, please be aware of the cost.
 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 7 }} align="justify">
    Yes, a tech-pack is required to get started. Mock-ups with or without print designs, fabric colors, quantity per size, label design, measurements, attachments, or samples of similar garments with the fit you prefer are required. We can also set up a phone call to answer all of your questions.
 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 7 }} align="justify">
    Wholesale orders are way more affordable than retail orders.
    <br/><br/>
    Retail orders are usually for brands that don't require customization. It's very convenient and don't ask for lead time since all the products are already made. But the stocks in the store usually are limited and inconsistent. Retail is frequently used as a sample, and clothing brands later print it with logos and graphic designs. 
    <br/><br/>
    When it comes to manufacturing, wholesale requires a minimum order quantity (MOQ), patience, and additional adjustments. You must reserve a time slot for lead time. It is the best option for clothing brands that require more customization in terms of details and preferences.
 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 1 }} align="justify">
    Our minimum order quantity for domestic production is 50 pieces per every style with one color only. Fifty pieces per every style in two different colors.
 </Typography>


   </Grid>
 </Grid>
</Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{ fontFamily: 'Arimo', fontSize: {lg: '1rem', xl: '1.1em'}, fontStyle: 'bold', ml: 22.5, mt: 5 }}>LOCATION</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container>
        <Grid item xs={6}>
   <Grid container direction="column" alignItems="flex-start">
        <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mt: 1 }}>
            Where is your location?
        </Typography>
  </Grid>
        </Grid>

        <Grid item xs={6}>
   <Grid container direction="column" justifyContent="flex-end">
        <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 1 }} align="justify">
        Our production office is located at 5041 Rizal St., Angeles City, Pampanga 2009, Philippines 
        </Typography>
  </Grid>
        </Grid>
    </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography sx={{ fontFamily: 'Arimo', fontSize: {lg: '1rem', xl: '1.1em'}, fontStyle: 'bold', ml: 22.5, mt: 5 }}>FABRICS</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container>
        <Grid item xs={6}>
   <Grid container direction="column" alignItems="flex-start">
        <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mt: 1 }}>
            What fabrics do you use?
        </Typography>
  </Grid>
        </Grid>

        <Grid item xs={6}>
   <Grid container direction="column" justifyContent="flex-end">
        <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 1 }} align="justify">
            We only offer terry brush for hoodies, sweaters, shorts, and sweatpants. For shirts, we have french terry cotton, jersey cotton, and CVC. We also provide canvas, twill, and woven fabrics for tote bags.
        </Typography>
  </Grid>
        </Grid>
    </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography sx={{ fontFamily: 'Arimo', fontSize: {lg: '1rem', xl: '1.1em'}, fontStyle: 'bold', ml: 22.5, mt: 5 }}>PAYMENT TERMS</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container>
 <Grid item xs={6}>
   <Grid container direction="column" alignItems="flex-start">
   <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mt: 1 }}>
    When is payment due?
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mt: 10 }}>
    What are some upfront costs?
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mt: 14 }}>
    What kind of payment will you accept?
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mr: 20,  mt: 8 }}>
    Can you (send me a sample, order my goods, etc.) before I make a deposit?
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mt: 12 }}>
    Can you give me a shipping cost estimate?
 </Typography>
   </Grid>
 </Grid>

 <Grid item xs={6}>
   <Grid container direction="column" justifyContent="flex-end">
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 1 }} align="justify">
    A deposit of seventy percent (70%) is required before production begins. The balance of your order is required before we release your finished products to you. 
 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 9 }} align="justify">
    The initial cost of garment development including: first pattern, cut & sew sample, fittings, grading, marking, and pattern corrections are all upfront costs to begin your pre-production sample. These costs vary per style, and must be paid in full before we begin start working on your project. The cost of the first pattern is paid upfront and later rebated or applied to your total production order. 
 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 8 }} align="justify">
    Bank to bank transfer, Dated cheque, cash and GCash only.
 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 9 }} align="justify">
    No. TSM will not move forward with an order until we have received a deposit or a payment in full for the garment development. It takes time and materials to create samples. If we do these things prior to receiving payment, a client could decide to bring our work to another factory for production without compensation. Our loss of money and time means we cannot serve our customers as effectively – and that’s a big problem
 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 6.5 }} align="justify">
    Shipping costs depend where you are located. We always make sure that you get the cheapest delivery option.
 </Typography>
   </Grid>
 </Grid>
</Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography sx={{ fontFamily: 'Arimo', fontSize: {lg: '1rem', xl: '1.1em'}, fontStyle: 'bold', ml: 22.5, mt: 5 }}>CUSTOM MANUFACTURING QUOTES PROCESS</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container>
 <Grid item xs={6}>
   <Grid container direction="column" alignItems="flex-start">
   <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mr: 15, mt: 1 }}>
    Do you send proofs prior to apparel production?
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mr: 23, mt: 30 }}>
    How long does it take to get back to me regarding a quote or other contact?
 </Typography>
   </Grid>
 </Grid>

 <Grid item xs={6}>
   <Grid container direction="column" justifyContent="flex-end">
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 1 }} align="justify">
    You will always receive a proof of your order before it is put into production. We do not print, sublimate, embroider, or otherwise create anything without your express, written approval.
Please review your proofs carefully. Look over all the information listed within the proof, review the images carefully, and request changes with anything you are not happy with.
<Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: 1, mr: 0, mt: 1 }} align="justify">
•   If you need changes made to your items, please let us know upon receipt of your proof. We cannot be held responsible for mistakes and errors that occur if you have approved production without carefully reviewing your proof information.
<br/><br/>
•   If you do not need changes to your proof, please reply to the e-mail and let us know you approve your proof for production. Remember, we cannot move forward with production until we have received written approval of a proof.
</Typography>

 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 9 }} align="justify">
    Simple contact inquiries are answered usually with in 24 hours (excluding weekends, holidays, and other closures). More complex inquiries like cut and sew manufacturing or silkscreen printing can take up to three days.
 </Typography>
   </Grid>
 </Grid>
</Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography sx={{ fontFamily: 'Arimo', fontSize: {lg: '1rem', xl: '1.1em'}, fontStyle: 'bold', ml: 22.5, mt: 5 }}>MANUFACTURING ORDER TIMING</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container>
 <Grid item xs={6}>
   <Grid container direction="column" alignItems="flex-start">
   <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mr: 20, mt: 1 }}>
    How long does it typically take to complete an order?
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mr: 25, mt: 14 }}>
    When does the clock start for my order turnaround time?
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mr: 20, mt: 10 }}>
    How can I make sure my order is not delayed?
 </Typography>
   </Grid>
 </Grid>

 <Grid item xs={6}>
   <Grid container direction="column" justifyContent="flex-end">
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 1 }} align="justify">
 Order turnaround is impossible to precisely estimate without the details of a given project: turnaround times can depend on the season, slot your reserved and the complexity of the order. The average turnaround to develop your first sample is about 10 – 25 days after we’ve received your fabric, and depending on the number of corrections. Upon production, after our tables are set and fabrics are marked and cut, it’s about 6 – 8 weeks of production time. 
 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 9 }} align="justify">
 Your order turnaround time begins once payment has been processed by the accounting department, all application requirements have been met, and your job order has been confirmed. Please take this into consideration when determining your ship dates. 
 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 8 }} align="justify">
 •  Please make sure you are absolutely ready to order.<br/>
 •  Please make sure all the information you submit is correct and complete<br/>
 •  Please be ready to respond to us with any change requests, and approvals. We will contact you through the process of ordering custom apparel. Failure on your part to reply with approvals or change requests will result in a delay of your order. No orders are sent for production unless approved by you.<br/>
 •  Please avoid unnecessary contact with our AP team. We are more than happy to give you an update on the status of your order! However, calling us with too much frequency can distract our employees and delay production.
 </Typography>
   </Grid>
 </Grid>
</Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7-content"
          id="panel7-header"
        >
          <Typography sx={{ fontFamily: 'Arimo', fontSize: {lg: '1rem', xl: '1.1em'}, fontStyle: 'bold', ml: 22.5, mt: 5 }}>OTHER QUESTIONS</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container sx={{ mb: 20 }}>
 <Grid item xs={6}>
   <Grid container direction="column" alignItems="flex-start">
   <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mr: 20, mt: 1 }}>
    What are your hours of operation?
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mr: 25, mt: 10 }}>
    Can we meet to discuss my project?
 </Typography>
 <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arimo', fontStyle: 'bold', fontSize: '1rem', color: '#646464', ml: 22.5, mr: 20, mt: 10 }}>
    Can you e-mail me, contact me, or otherwise get in touch with me regarding a clothing piece I am interested in creating?
 </Typography>
   </Grid>
 </Grid>

 <Grid item xs={6}>
   <Grid container direction="column" justifyContent="flex-end">
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 1 }} align="justify">
    PHYSICAL STORE: Monday to Satuday, 10AM to 7PM.
    <br/>
    WAREHOUSE: Monday to Satuday, 9AM to 5PM.
  </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 9 }} align="justify">
    Yes! But before we can setup a meeting with one of our representatives, we will need you send us all information pertaining to your project for review.
 </Typography>
 <Typography variant="body2" gutterBottom sx={{ fontSize: '0.8rem', ml: -3, mr: 9, mt: 8 }} align="justify">
    No. This is for one very big, very important reason: talking to you without first gathering the required information (i.e., through our quote forms) is wasteful of everyone’s time. If you’re interested in Cut and Sew Manufacturing, for instance, speaking with representative before submitting your CAD, mock-up and/or tech-pack is essentially pointless. We need a lot of information to answer any questions you may have.
    <br/><br/>
    What seems like a broad, easily-answered question to you may actually hinge on several factors, depending on the service you choose — just asking, “Can you do X on Y product for me” is not a question we can easily answer. 
    <br/><br/>
    We must gather specific, relevant information about your product, your garment, and your project, and give you one answer hand-tailored to your piece, situation, and finances.
 </Typography>
   </Grid>
 </Grid>
</Grid>
        </AccordionDetails>
      </Accordion>
    </div>

  <ResponsiveFooter position="bottom"/>
   </ThemeProvider>
</>
  )
}

export default FAQs