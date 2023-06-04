import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import qrcode from '../../assets/qrcode.png'

const DonateUs = () => {
  return (
    <>
      <Container sx={{mt:'7rem'}}>
        <Grid container spacing={5}>
          <Grid item md={4} xs={12}>
              <Box component={'img'} src={qrcode} sx={{height:'100%',width:'100%'}}/>
          </Grid>
          <Grid item md={8} xs={12}>
            <Stack spacing={4}>
              <Typography variant='h4'><strong>Donate Us with UPI </strong></Typography>
              <Typography variant='h6'>UPI Mobile No. 9191919191</Typography>
              <Typography variant='h6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id animi, reiciendis, iusto sit soluta autem tempore laboriosam magni harum voluptatem facilis assumenda cupiditate laudantium sequi, totam impedit. Quidem tempore, vero ad quae, cumque veniam, nemo voluptate nobis sit aliquam possimus? Ea quibusdam quo maiores quos recusandae eos, placeat delectus! Iste.</Typography>
              <Divider/>
            </Stack>
          </Grid>
          </Grid>
      </Container>
    </>
  )
}

export default DonateUs
