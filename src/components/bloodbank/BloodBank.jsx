import { Box, Button, Card, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import React from 'react'
import styled from '@mui/material/styles/styled'



const StyledCard = styled(Card)(() => ({
    backgroundColor: 'rgba(152, 152, 150, 0.3)',
    marginTop: '5rem',
    width: '100%',
    // opacity:'0.2'
    
}))

const BloodBank = () => {
    
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

  return (
      <>
          <Container sx={{height:'4rem',width:'100%'}}>
              {/* <Grid container> */}
               
                  <StyledCard sx={{height:{xs:'25.5rem',sm:'25.5',md:'17',lg:'17rem'}}}>
                      <Typography sx={{m:'2rem'}} variant='h5'>Find Blood  banks  of India</Typography>
                      <Stack justifyContent={'center'} alignItems='center' direction={{lg:'row',md:'row',sm:'column',xs:'column'}} sx={{m:'2rem'}} spacing={2}>
                  
                      <FormControl sx={{ width: '100%' }}>
                 
                      <InputLabel  id="demo-simple-select-helper-label">Select state</InputLabel>
                                <Select 
                                     sx={{backgroundColor:'#fff'}}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="--Blood Group--"
                        onChange={handleChange}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Andhra Pradesh	</MenuItem>
                        <MenuItem value={2}>Arunachal Pradesh	</MenuItem>
                        <MenuItem value={3}>Assam	</MenuItem>
                        <MenuItem value={4}>Bihar</MenuItem>
                        <MenuItem value={5}>Chhattisgarh</MenuItem>
                        <MenuItem value={6}>Goa</MenuItem>
                        <MenuItem value={7}>Gujarat</MenuItem>
                        <MenuItem value={8}>Haryana</MenuItem>
                        <MenuItem value={9}>Himachal Pradesh	</MenuItem>
                        <MenuItem value={10}>Jharkhand</MenuItem>
                        <MenuItem value={11}>Karnataka</MenuItem>
                        <MenuItem value={12}>Kerala</MenuItem>
                        <MenuItem value={13}>Haryana</MenuItem>
                        <MenuItem value={14}>Madhya Pradesh	</MenuItem>
                        <MenuItem value={15}>Maharashtra</MenuItem>
                        <MenuItem value={16}>Manipur</MenuItem>
                        <MenuItem value={17}>Meghalaya</MenuItem>
                        <MenuItem value={18}>Mizoram</MenuItem>
                        <MenuItem value={19}>Nagaland</MenuItem>
                        <MenuItem value={20}>Odisha</MenuItem>
                        <MenuItem value={21}>Punjab</MenuItem>
                        <MenuItem value={22}>Rajasthan</MenuItem>
                        <MenuItem value={23}>Sikkim</MenuItem>
                        <MenuItem value={24}>Tamil Nadu	</MenuItem>
                        <MenuItem value={25}>Telangana</MenuItem>
                        <MenuItem value={26}>Tripura</MenuItem>
                        <MenuItem value={27}>Uttar Pradesh	</MenuItem>
                        <MenuItem value={28}>Uttarakhand</MenuItem>
                        <MenuItem value={29}>West Bengal	</MenuItem>
                              </Select>
                             
                              </FormControl>
                      <FormControl sx={{ width: '100%' }}>
                 
                      <InputLabel  id="demo-simple-select-helper-label">Select city</InputLabel>
                                <Select 
                                     sx={{backgroundColor:'#fff'}}
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="Select city"
                        onChange={handleChange}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Andhra Pradesh	</MenuItem>
                        <MenuItem value={2}>Arunachal Pradesh	</MenuItem>
                        <MenuItem value={3}>Assam	</MenuItem>
                        <MenuItem value={4}>Bihar</MenuItem>
                        <MenuItem value={5}>Chhattisgarh</MenuItem>
                        <MenuItem value={6}>Goa</MenuItem>
                        <MenuItem value={7}>Gujarat</MenuItem>
                        <MenuItem value={8}>Haryana</MenuItem>
                        <MenuItem value={9}>Himachal Pradesh	</MenuItem>
                        <MenuItem value={10}>Jharkhand</MenuItem>
                        <MenuItem value={11}>Karnataka</MenuItem>
                        <MenuItem value={12}>Kerala</MenuItem>
                        <MenuItem value={13}>Haryana</MenuItem>
                        <MenuItem value={14}>Madhya Pradesh	</MenuItem>
                        <MenuItem value={15}>Maharashtra</MenuItem>
                        <MenuItem value={16}>Manipur</MenuItem>
                        <MenuItem value={17}>Meghalaya</MenuItem>
                        <MenuItem value={18}>Mizoram</MenuItem>
                        <MenuItem value={19}>Nagaland</MenuItem>
                        <MenuItem value={20}>Odisha</MenuItem>
                        <MenuItem value={21}>Punjab</MenuItem>
                        <MenuItem value={22}>Rajasthan</MenuItem>
                        <MenuItem value={23}>Sikkim</MenuItem>
                        <MenuItem value={24}>Tamil Nadu	</MenuItem>
                        <MenuItem value={25}>Telangana</MenuItem>
                        <MenuItem value={26}>Tripura</MenuItem>
                        <MenuItem value={27}>Uttar Pradesh	</MenuItem>
                        <MenuItem value={28}>Uttarakhand</MenuItem>
                        <MenuItem value={29}>West Bengal	</MenuItem>
                              </Select>
                             
                              </FormControl>
                              <Button sx={{width:'50%',backgroundColor:'#ca3e31','&:hover':{backgroundColor:'#820000'}}} variant='contained'>Search</Button>

                      </Stack>
                      
                    
                  </StyledCard>    
                  {/* </Grid>
                  <Grid item md={4} xs={12}>                  
                  </Grid>
                  <Grid item md={4} xs={12}>                  
                  </Grid> */}
              {/* </Grid> */}
        </Container>
      </>
  )
}

export default BloodBank