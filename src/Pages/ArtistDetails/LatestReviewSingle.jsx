import React from 'react'

import styled from 'styled-components'
import LatestMendiReview from '../LatestMehendiReview/LatestMendiReview'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

const Container = styled.div`
    width: 100%;
    padding: 0px 150px;

    h1{
        font-size: 1.625rem;
        font-weight: 500;
        color: #363636;
        @media screen and (max-width: 678px) {
      
              font-size: 1.15rem;
         }
    }
    h4{
        padding: 20px 0;
        font-size: 1.35rem;
        color: #3b3b3b;
        font-weight: 400;

        @media screen and (max-width: 678px) {
      
             font-size: 1rem;
        }
    }

    @media screen and (max-width: 811px) {
      padding: 0 20px;

    }



`

const LatestReview = () => {
  return (
    <>
    <Container>

        <h1> Latest reviews (10) </h1>
        <h4>Rate Prakash Mehndi Art</h4>

        <span>
          <StarBorderOutlinedIcon/>
          <StarBorderOutlinedIcon/>
          <StarBorderOutlinedIcon/>
          <StarBorderOutlinedIcon/>
          <StarBorderOutlinedIcon/>
        </span>
        <hr style={{color:'#fa4970', margin: '20px 0'}} />

        <LatestMendiReview/>
    </Container>

    </>
  )
}

export default LatestReview