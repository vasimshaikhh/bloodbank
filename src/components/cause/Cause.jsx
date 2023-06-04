import { Box, Button, Container, Grid, Slider, Stack, Typography } from '@mui/material'
import React from 'react'
import image4 from '../../assets/image4.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Cause = () => {
  return (
    <Container maxWidth='md' sx={{mt:'13rem'}} >
      <Grid container spacing={3} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Grid item md={4} xs={12}>
          <Box component={'img'} src={image4} sx={{width:'100%',height:'20rem'}} />
        </Grid>
        <Grid item md={8} xs={12}>
          <Stack spacing={1}>
              <Typography variant={'h4'}><strong>Eradicate Blood Shortage</strong></Typography>
            <Typography variant={'h6'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt at doloremque vero et praesentium ducimus. Quo error neque pariatur modi cumque quae ut repudiandae magnam sapiente amet, ipsa architecto ipsum temporibus explicabo quibusdam mollitia vero omnis, expedita possimus debitis tempore!</Typography>
            <Box width='100%'>

              <Slider sx={{color:'red'}} defaultValue={'10k'} aria-label="Default" valueLabelDisplay="auto" />
              </Box>
              <Typography variant='body1'><strong>DONATION:</strong> ₹50/ ₹12000</Typography>
              <Stack direction='row' justifyContent={'space-Between'}>
                <Button variant="contained" startIcon={<FacebookIcon />}>share</Button>
                <Button sx={{'&:hover':{backgroundColor:'green'},backgroundColor:'green'}} variant="contained" startIcon={<WhatsAppIcon />}>share</Button>
             </Stack>
              <Button sx={{ width: '100%' }} color='inherit' variant='contained'>Donate Now</Button>
         
            
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cause