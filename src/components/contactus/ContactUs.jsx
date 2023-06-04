import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, Container, Paper } from '@mui/material'


function ContactUs() {


    return (
      <>
      {/* <Typography gutterBottom variant="h3" align="center">
        React-ContactUS
            </Typography> */}
            <Container sx={{mt:'5rem'}}>
            <Grid container>
                  <Grid item lg={6}md={6}sm={12} xs={12}>
                <Container
                maxWidth={"sm"}
                  sx={{ mt: { lg: "5rem", md: "5rem", xs: "1rem", sm: "1rem" } }}
                >
                <Paper
                    sx={{
                    backgroundColor: "#f7fafd",
                    height: {lg:"18rem",md:'18rem',xs:'10rem',sm:'10rem'},
                    width: "100%",
                    }}
                >
                    <Typography sx={{ typography: { sm: "h4", xs: "h4",lg:'h2',md:'h2' } }}>
                    <strong>
                    Want to watch a miracle? Go and donate blood.
                    </strong>
                    </Typography>
                </Paper>
                </Container>
                </Grid>
                  <Grid item lg={6}md={6}sm={12} xs={12}>
        <Card style={{ maxWidth: '100%', padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                 <Grid item xs={12}>
                        
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                 </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
        
                </Grid>
                </Grid>
                </Container>
            </>
  );
}

export default ContactUs;