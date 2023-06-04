import { Container, Grid, Typography,Box, Stack } from '@mui/material'
import React from 'react'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SpeedIcon from '@mui/icons-material/Speed';


const Section3 = () => {
    return (
      <Box sx={{backgroundColor:'#fbfbfb',mt:{lg:0,md:0,xs:'3rem'}}}>
      <Container maxWidth='md'>
          <Grid container spacing={3} sx={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
              <Grid item xs={12}>
                  <Typography variant='h6'><strong> OUR PROMISE</strong></Typography>
              </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={{lg:12,md:12,xs:1,sm:1}}>                           
                                <Grid item xs={4}>
                                <Stack alignItems={'center'} justifyContent='center' spacing={1} >
                                    <Box sx={{height:'5rem',width:'100%',backgroundColor:'#ff5722'}}><MilitaryTechIcon sx={{width:'7rem',height:'5rem'}} /></Box>
                                <Typography variant='body2'><strong>QUALITY</strong></Typography>
                                <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, esse?.</Typography>
                                    </Stack>
                                    </Grid>
                                <Grid item xs={4}>
                                <Stack alignItems={'center'} justifyContent='center' spacing={1} >
                                    <Box sx={{height:'5rem',width:'100%',backgroundColor:'#ff5722'}}><QueryStatsIcon sx={{width:'7rem',height:'5rem'}} /></Box>
                                <Typography variant='body2'><strong>TRANSPARENCY</strong></Typography>
                                <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
                                    </Stack>
                                    </Grid>
                                <Grid item xs={4}>
                                <Stack alignItems={'center'} justifyContent='center' spacing={1} >
                                    <Box sx={{height:'5rem',width:'100%',backgroundColor:'#ff5722'}}><SpeedIcon sx={{width:'7rem',height:'5rem'}} /></Box>
                                <Typography variant='body2'><strong>SPEED</strong></Typography>
                                <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing.</Typography>
                                    </Stack>
                                    </Grid>
                              
                                                            
                        </Grid>
                        
              </Grid>
          </Grid>
            </Container>
            </Box>
  )
}

export default Section3
