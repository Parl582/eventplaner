import React from 'react'
import { Container, LandingImage, SearchDiv } from './LandingPageStyle'
import Header from '../../common/Header';
import SearchIcon from '@mui/icons-material/Search';
import smilly from '../../images/smilly.jpg'


const LandingPage = () => {
  

  return (
    <>
        <Container>
            <Header/>
            <LandingImage   initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}>
                <h1>
                    Your Event, Your Way <br />
                    Find The Best Event Vendors with thousand of trusted reviews 
                </h1>
                <SearchDiv>
                <span><SearchIcon style={{fontSize:"30px"}} /> </span>
                <input type="text" placeholder='Search Vendor' />
                </SearchDiv>
                <button><img src={smilly} alt=""/>Find Vendor</button>
            </LandingImage>
        </Container>
    </>
  )
}

export default LandingPage