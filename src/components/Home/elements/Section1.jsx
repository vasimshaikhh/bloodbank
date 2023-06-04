import { Box, Button, Card, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import React from 'react'
import styled from '@mui/material/styles/styled'
import image1 from '../../../assets/image1.jpg'
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import Person2Icon from '@mui/icons-material/Person2';


// --------------------Styled Components-----------------------

const StyledBox = styled(Box)(() => ({
    background: `url(${image1})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop:'4rem',
}))

const StyledCard = styled(Card)(() => ({
    backgroundColor: 'rgba(152, 152, 150, 0.3)',
    marginTop: '5rem',
    width: '100%',
    // opacity:'0.2'
    
}))

const CircledStack = styled(Stack)(() => ({
    cursor: 'pointer', backgroundColor: 'rgb(220,158,141,0.3)', height: '14rem', width: '14rem', borderRadius: '15rem', display: 'flex',
    '&:hover':{backgroundColor:'rgb(255,87,34,0.3)'}
    
}))
// --------------------Styled Components End-----------------------


// -----------------------Function Starts Ovre here---------------------
const Section1 = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
      
      <StyledBox sx={{height:{lg:'90vh',md:'90vh',xs:'75rem',sm:'75rem'}}}>
          <Container>
          <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                      <StyledCard sx={{height:{xs:'25.5rem',sm:'25.5',md:'17',lg:'17rem'}}}>
                      
                          <Stack direction={{lg:'row',md:'row',sm:'column',xs:'column'}} sx={{m:'2rem'}} spacing={2}>
                          <FormControl sx={{ width: '100%' }}>
                             
                                  
                          <InputLabel  id="demo-simple-select-helper-label">--Blood Group--</InputLabel>
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
                            <MenuItem value={10}>A RhD positive (A+)</MenuItem>
                            <MenuItem value={20}>A RhD negative (A-)</MenuItem>
                            <MenuItem value={30}>B RhD positive (B+)</MenuItem>
                            <MenuItem value={30}>B RhD negative (B-)</MenuItem>
                            <MenuItem value={30}>O RhD positive (O+)</MenuItem>
                            <MenuItem value={30}>O RhD positive (O-)</MenuItem>
                            <MenuItem value={30}>AB RhD positive (AB+)</MenuItem>
                            <MenuItem value={30}>AB RhD negative (AB-)</MenuItem>
                                  </Select>
                                 
                          </FormControl>
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
                          </Stack>
                          <Stack direction={{lg:'row',md:'row',sm:'column',xs:'column'}} sx={{m:'2rem'}} spacing={2}>
                          <FormControl sx={{ width: '100%' }}>
                             
                                  
                          <InputLabel  id="demo-simple-select-helper-label">Select Taluka</InputLabel>
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
                                      
                            {/* <MenuItem value={10}>A RhD positive (A+)</MenuItem> */}
                          
                                  </Select>
                                 
                          </FormControl>
                          <FormControl sx={{ width: '100%' }}>
                          <InputLabel  id="demo-simple-select-helper-label">All Tehsil</InputLabel>
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
                        
                            {/* <MenuItem value={27}>Uttar Pradesh	</MenuItem> */}
                            
                          
                                  </Select>
                                 
                          </FormControl>
                          </Stack>
                          <Stack justifyContent={'center'} alignItems='center'>
                              <Button sx={{width:'8rem',backgroundColor:'#ca3e31','&:hover':{backgroundColor:'#820000'}}} variant='contained'>Find Blood</Button>
                              </Stack>
        
                      </StyledCard>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                        <Stack spacing={3} justifyContent={'center'} alignItems='center' sx={{mt:'5rem'}}>
                            <Typography variant='h4' sx={{color:'#fff'}}><strong>Donate Blood</strong> Give the Gift of Life</Typography>
                           
                            <Stack direction={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }} spacing={3}>
                           
                                <CircledStack justifyContent='center' alignItems='center'>
                                    <BloodtypeIcon sx={{height:'5rem',width:'5rem',color:'#fff','&:hover':{color:'red'}}} /> 
                                    <Typography sx={{color:'#fff','&:hover':{color:'red'}}} variant='h4'>Request </Typography>
                                    <Typography  sx={{color:'#fff','&:hover':{color:'red'}}} variant='h4'>Blood</Typography>
                                </CircledStack>
                           
                                <CircledStack justifyContent='center' alignItems='center' >
                                    <Person2Icon sx={{height:'5rem',width:'5rem',color:'#fff','&:hover':{color:'red'}}} /> 
                                    <Typography sx={{color:'#fff','&:hover':{color:'red'}}} variant='h4'>find Blood</Typography>
                                    <Typography  sx={{color:'#fff','&:hover':{color:'red'}}} variant='h4'> Donar</Typography>
                                </CircledStack>
                            </Stack>
                        </Stack>
              </Grid>
              </Grid>
              </Container>
    </StyledBox>
  )
}

export default Section1