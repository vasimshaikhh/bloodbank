import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ThreeKPlusIcon from '@mui/icons-material/ThreeKPlus';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import WashIcon from '@mui/icons-material/Wash';
const Section5 = () => {
  return (
      <Box  sx={{height:{md:'15rem',xs:'40rem'},mt:'3rem',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#f4c5c0'}}>
          <Grid container spacing={{lg:20,md:20,xs:10}}  sx={{mt:'2rem',display:'flex',justifyContent:'center',alignItems:'center'}}> 
              <Grid item lg={2} md={2} sm={6} xs={6}>
              
              <Stack spacing={1.5}  justifyContent='center'alignItems='center'>
                  <BloodtypeIcon sx={{ height: '6rem', width: '6rem',color:'#dc1205' }} />
                  <Typography sx={{textAlign:'center'}} variant='body1'>Affordable rates</Typography>
                  </Stack>
                  </Grid>
              <Grid item lg={2} md={2} sm={6} xs={6}>
              
              <Stack spacing={1.5}  justifyContent='center'alignItems='center'>
                  <MonetizationOnIcon sx={{ height: '6rem', width: '6rem',color:'#dc1205' }} />
                  <Typography sx={{textAlign:'center'}} variant='body1'>Skin Friendly</Typography>
                  </Stack>
                  </Grid>
              <Grid item lg={2} md={2} sm={6} xs={6}>
              
              <Stack spacing={1.5}  justifyContent='center'alignItems='center'>
                  <ThreeKPlusIcon sx={{ height: '6rem', width: '6rem',color:'#dc1205' }} />
                  <Typography sx={{textAlign:'center'}} variant='body1'>UV Safe Air Drying</Typography>
                  </Stack>
                  </Grid>
              <Grid item lg={2} md={2} sm={6} xs={6}>
              
              <Stack spacing={1.5}  justifyContent='center'alignItems='center'>
                  <Diversity3Icon sx={{ height: '6rem', width: '6rem',color:'#dc1205' }} />
                  <Typography sx={{textAlign:'center'}} variant='body1'>Uses less & Fresh Water</Typography>
                  </Stack>
              </Grid>
              <Grid item lg={2} md={2} sm={6} xs={6}>
              
              <Stack spacing={1.5}  justifyContent='center'alignItems='center'>
                  <VolunteerActivismIcon sx={{ height: '6rem', width: '6rem',color:'#dc1205' }} />
                  <Typography sx={{textAlign:'center'}} variant='body1'>Uses less & Fresh Water</Typography>
                  </Stack>
              </Grid>
              <Grid item lg={2} md={2} sm={6} xs={6}>
              
              <Stack spacing={1.5}  justifyContent='center'alignItems='center'>
                  <WashIcon sx={{ height: '6rem', width: '6rem',color:'#dc1205' }} />
                  <Typography sx={{textAlign:'center'}} variant='body1'>Uses less & Fresh Water</Typography>
                  </Stack>
              </Grid>
              
          </Grid>
    </Box>
  )
}

export default Section5
