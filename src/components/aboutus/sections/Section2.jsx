import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import bedImg from '../../../assets/image1.jpg'
import save from '../../../assets/image1.jpg'
// import save from '../../../asset/save.jpg'

const Section2
 = () => {
    return (
      <>
            <Grid container sx={{ mt: "1rem" , backgroundColor:'#f7fafd' }}>
                <Grid item xs={12}>
                    <Stack spacing={2} direction='column' jutifycontent='center' alignItems='center' textAlign={'center'}>
                        <Typography sx={{color:'#003a25'}} variant={'h4'}><strong>Lorem ipsum dolor sit, amet consectetur adipisicing.</strong></Typography>
                        <Typography variant={'body2'}><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsam animi quis autem, iure fugiat assumenda quod non necessitatibus! Perspiciatis vitae dicta natus eaque, facilis iusto minima voluptates consequuntur a.

</strong></Typography>
                    </Stack>
                </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Container
              maxWidth={"sm"}
              sx={{ mt: { lg: "5rem", md: "5rem", xs: "1rem", sm: "1rem" } }}
            >
              <Paper
                sx={{
                  backgroundColor: "#f7fafd",
                  height: {lg:"18rem",md:'18rem',xs:'20rem',sm:'20rem'},
                  width: "100%",
                }}
              >
                {/* <Typography sx={{ typography: { sm: "h4", xs: "h4",lg:'h2',md:'h2' } }}> */}
                <Typography variant='body2' sx={{letterSpacing:{lg:1,md:1,xs:1,sm:1} , lineHeight:{lg:1.6,md:1.5,sm:1,xs:1}}}>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore ratione voluptatem voluptate! Lorem ipsum dolor sit amet.<Typography sx={{color:'#003a25'}}> Easier!</Typography>

At UClean, we bring the best-in-class Laundry, Dry Cleaning and Home Cleaning Services at your doorstep!

                                UClean operates a network of over 300+ mini laundromats across 85+ cities, making
                                <Typography sx={{color:'#003a25'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur. </Typography>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, incidunt cupiditate placeat aliquam voluptatibus error odio sunt iure. Repudiandae consectetur maiores itaque cumque ratione aut?
                </Typography>
              </Paper>
            </Container>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Box
              component={"img"}
              src={bedImg}
              sx={{ width: "100%", height:{lg:"26rem",md:'26rem',xs:'15rem',sm:'15rem'} }}
            />
                </Grid>
                <Container>
                    <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}zIndex={8}>
            <Box
              component={"img"}
              src={bedImg}
              sx={{ width: "100%", height:{lg:"26rem",md:'26rem',xs:'15rem',sm:'15rem'} }}
            />
                </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} zIndex={9}>
            <Container
              maxWidth={"sm"}
              sx={{ mt: { lg: "5rem", md: "5rem", xs: "1rem", sm: "1rem" } }}
            >
              <Paper
                sx={{
                  backgroundColor: "#f7fafd",
                  height: {lg:"18rem",md:'18rem',xs:'22rem',sm:'22rem'},
                  width: "100%",
                }}
              >
                {/* <Typography sx={{ typography: { sm: "h4", xs: "h4",lg:'h2',md:'h2' } }}> */}
                <Typography variant='body2' sx={{letterSpacing:{lg:1,md:1,xs:1,sm:1} , lineHeight:{lg:1.6,md:1.5,sm:1,xs:1}}}>
                But none of these commercials talked about the hours of hard work required to get that blinding whiteness. Do the words ‘enzyme soak’, hot water cleaning’, ‘bluing’ ring a bell? How we wish maintaining ourwhite clothes was easy as watching those commercials. With UClean, it is<Typography sx={{color:'#003a25'}}> lorem!</Typography>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fugit. Quisquam quidem aperiam architecto earum.

                                Lorem ipsum, dolor sit amet consectetur adipisicing.
                                <Typography sx={{color:'#003a25'}}>     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem! </Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et numquam praesentium earum itaque quibusdam incidunt? Dicta, a expedita.lorem2
                </Typography>
              </Paper>
            </Container>
                        </Grid>
                        </Grid>
                    </Container>
        </Grid>
      </>
    );
}

export default Section2

