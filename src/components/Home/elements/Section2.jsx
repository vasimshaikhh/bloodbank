import { Box, Button, Card, Container, Grid, Stack, Typography } from '@mui/material'
import styled from '@mui/material/styles/styled'
import React from 'react'
import image2 from '../../../assets/image1.jpg'

const StyledCard = styled(Card)(() => ({
    
}))
const StyledStack = styled(Stack)(() => {
    
})
const StyledGridContainer = styled(Grid)(() => ({
    // background: `url(${image2})`,
    backgroundColor:'rgb(218,62,48,0.3)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: {lg:'18rem',md:'14rem',xs:'28rem'},
    display: '-ms-inline-grid',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'0.5rem'
    
}))


const Section2 = () => {
  return (
      <StyledGridContainer container spacing={5} sx={{height: {lg:'18rem',md:'18rem',xs:'40rem'}}}>
          <Grid item lg={4} md={4} sm={12} xs={12} >
              <Box >
                  <Container maxWidth='xs'>
              <Stack spacing={2} direction={'column'}justifyContent='center' alignItems={'center'} textAlign='center'>
                  <Typography variant='h4' >Donations</Typography>
                  <Typography variant='body2'>Wea are gratefull for our Real Hero and hope for them always success who helps Donate to Blood Bank Today </Typography>
                  <Button sx={{border:'1px solid #fff','&:hover':{border:'1px solid #fff'},color:'#fff'}} variant='outlined'>Donate Us</Button>
                      </Stack>
                      </Container>  
                  </Box>
        </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12} >
              <Box >
                  <Container maxWidth='xs'>
              <Stack spacing={2} direction={'column'}justifyContent='center' alignItems={'center'} textAlign='center'>
                  <Typography variant='h4' >Donations</Typography>
                  <Typography variant='body2'>Wea are gratefull for our Real Hero and hope for them always success who helps Donate to Blood Bank Today </Typography>
                  <Button sx={{border:'1px solid #fff','&:hover':{border:'1px solid #fff'},color:'#fff'}} variant='outlined'>Donate Us</Button>
                      </Stack>
                      </Container>  
                  </Box>
        </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12} >
              <Box >
                  <Container maxWidth='xs'>
              <Stack spacing={2} direction={'column'}justifyContent='center' alignItems={'center'} textAlign='center'>
                  <Typography variant='h4' >Donations</Typography>
                  <Typography variant='body2'>Wea are gratefull for our Real Hero and hope for them always success who helps Donate to Blood Bank Today </Typography>
                  <Button sx={{border:'1px solid #fff','&:hover':{border:'1px solid #fff'},color:'#fff'}} variant='outlined'>Donate Us</Button>
                      </Stack>
                      </Container>  
                  </Box>
        </Grid>
    </StyledGridContainer> 
  )
}

export default Section2