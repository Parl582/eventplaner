import React from 'react'
import styled from 'styled-components'
import headerImage from '../../images/artistpage.png'

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import { Box,Radio, RadioGroup, TextField, Typography } from '@mui/material';

  



const Container = styled.div`

    width: 100%;

`
const HeaderContainer = styled.div`

    width: 100%;
    background-image: url(${headerImage});
    height: 499px;
    color: #fff;
    background-size: 100% 100%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    padding: 0 20px;

`
const Heading = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    line-height: 40px;
    position: relative;

    h1{
      font-size: 2.25rem;
      text-align: center;
          @media screen and (max-width: 768px) { 
             font-size: 1.5rem;
        } 
          @media screen and (max-width: 588px) { 
             font-size: 1.3rem;
        } 
      }

    p{
      font-size: 1.625rem;
      text-align: center;
      @media screen and (max-width: 768px) { 
             font-size: 1rem;
          } 
      @media screen and (max-width: 588px) { 
             font-size: 0.85rem;
        } 
    }

    button{
      font-size: large;
      text-transform: uppercase;
      width: 250px;
      height: 56px;
      text-align: center;
      border-radius: 50px;
      border: none;
      cursor: pointer;
      font-size: 18px;
      font-weight: 500;
      color: #fff;
      background-color: #fa4970;
      position: absolute;
      margin-top: 270px;

  @media screen and (max-width: 768px) { 
         width: 200px;
         height: 50px;
      } 
  }
`


const MehendiArtist = () => {

  const [fullWidth, setFullWidth] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
   
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
    setOpen(false);
   
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAll = () => {
    setOpen(false);
    setOpen2(false);
  };



  return (
    <>
    <Container>
      <HeaderContainer>
        <Heading>
          <h1>530+ Mehndi Artist in Noida</h1>
          <p>Tell us more about your requirements so that we can connect you to the right mehndi artist in noida</p>
            <button  onClick={handleClickOpen}>
              Getting started
            </button>
        </Heading>

        <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle  >
         <Typography variant="h6" align="center" margin="dense" marginBottom={4}>Select Your Budget Range</Typography>
  
        </DialogTitle>
        <DialogContent>
          <DialogContentText>

          <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="low"
        name="radio-buttons-group"
      >
        <FormControlLabel value="low" control={<Radio />} label="Rs. 1500 to 2500"  />
        <FormControlLabel value="mid" control={<Radio />} label="Rs. 2500 to 3000" />
        <FormControlLabel value="average" control={<Radio />} label="Rs. 3000 to 3500" />
        <FormControlLabel value="mid-avg" control={<Radio />} label="Rs. 3500 to 4000" />
        <FormControlLabel value="high" control={<Radio />} label="Rs. 4000 to 4500" />
        <FormControlLabel value="mid-high" control={<Radio />} label="More than 5000" />
      </RadioGroup>
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content"
            }}
          >
            <FormControl md={{ mt: 2, minWidth: 220 }}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
            </FormControl>
          </Box>
        </DialogContent>
        <BtnContainer>
          <button style={{backgroundColor:"#fa4970"}} onClick={handleClickOpen2}>Next</button> 
        </BtnContainer>
  
        {/* ----------------------------------------- */}

      </Dialog>
        <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open2}
        onClose2={handleClose}
      >
        <DialogTitle>
  
        <Typography variant="h6" align="center" margin="dense" marginBottom={5} marginTop={4} >Fill Contact Details</Typography>

        </DialogTitle>
        <DialogContent>
          <DialogContentText>

          <TextField fullWidth label="Mobile Number" id="fullWidth" margin='dense' />
          <TextField fullWidth label="Name" id="fullWidth" margin='normal' />
          <TextField fullWidth label="Email-Id" id="fullWidth" margin='dense' />
     
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content"
            }}
          >
            <FormControl md={{ mt: 2, minWidth: 220 }}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
            </FormControl>
          </Box>
        </DialogContent>       
        <BtnContainer>
          <button onClick={handleClickOpen}>Back</button>
          <button onClick={handleAll}>Submit</button>
        </BtnContainer>


      </Dialog>
      </HeaderContainer>
    </Container>
    </>
  )
}

export default MehendiArtist

const BtnContainer = styled.div`
  width: 100%;
  margin-top: 70px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;

  button{

    width: 190px;
    height: 46px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    background-color: #858585;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;

    :nth-child(2){
      background-color: #fa4970;
    }


  }
`