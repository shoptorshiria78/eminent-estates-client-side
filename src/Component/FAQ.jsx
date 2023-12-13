
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Grid, Paper } from '@mui/material';
import Lottie from 'lottie-react';
import AnimationFAQ from '../assets/AnimationFAQ.json'

export default function FAQ() {
  return (
    <Box sx={{ maxWidth: 1200, flexGrow: 1, mx: 'auto', my: 12 }}>
      <Paper elevation={10} sx={{ width: '440px', mx: 'auto', my: 4, background: '#3081D0' }}><Typography variant="h4" sx={{ px: '12px', py: '5px', color: '#FFF5C2' }}>Frequently Asked Question</Typography></Paper>

      <Grid container  spacing={8} sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
<Lottie animationData={AnimationFAQ}></Lottie>
        </Grid>
        <Grid item xs={12} md={6}>
          <Accordion sx={{my:2}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Are pets allowed in the apartment?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, we are pet-friendly. However, there may be a pet deposit and certain restrictions.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{my:2}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography> Is there parking available, and is it included in the rent?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, there is parking available. It may be included in the rent or billed separately.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{my:2}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Can I sublet the apartment if needed?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Subletting is allowed under certain conditions. Please contact our leasing office for more information.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{my:2}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography> How is maintenance handled in the building?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              We have a dedicated maintenance team available for repairs. Residents can submit maintenance requests online or contact the leasing office.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{my:2}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Can I renew my lease at the end of the term?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Yes, you can discuss lease renewal options with our leasing team closer to the end of your lease term.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  );
}