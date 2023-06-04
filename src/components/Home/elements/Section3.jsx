import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
// import image5 from '../../../asset/image1.jpg'
import image5 from '../../../assets/image1.jpg'
const Section3 = () => {
  return (
      <>
          <Box sx={{ mt: '1rem', backgroundColor: '#f3f3f3',height:{lg:'25rem',md:'25rem',} }}>
              <Container>
                  <Grid container spacing={2}>
                      <Grid item lg={5} md={5} sm={12} xs={12}>
                          <Box sx={{height: {lg:'20rem',md:'20rem',sm:'15rem',xs:'15rem'}, width: '100%' }}>
                              <Box component='img' src={image5} sx={{height:'100%',width:'100%',borderRadius: '1.5rem'}}/>
                        </Box>
                      </Grid>        
                      <Grid item lg={7} md={7} sm={12} xs={12}>
                          <Stack spacing={2} textAlign='center' justifycontent='center'alignItems='center'>
                              <Typography variant='h5'>
                                  <strong>Why Should You Donate</strong>
                              </Typography>
                              <Typography variant='body1'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus neque eveniet rem repellat eligendi nulla porro temporibus quisquam accusamus. Accusantium, dolore perferendis hic quibusdam sapiente beatae. Voluptate, sequi nihil velit soluta necessitatibus ab sunt repellat tempora commodi quaerat saepe eos fugiat dolorum quis distinctio consequuntur magnam. Similique eum doloribus assumenda. Saepe velit nobis, minus eaque harum tenetur, rerum molestiae perferendis adipisci sapiente corporis culpa nam vero quae ut aliquam error assumenda debitis voluptas maxime. Ullam adipisci fuga molestiae explicabo fugit!
                              </Typography>
                        </Stack>
                      </Grid>        
                  </Grid>
              </Container>
        </Box>
      </>
  )
}

export default Section3