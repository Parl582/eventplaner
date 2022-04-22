import React from 'react'
import { Container, Header, SearchDiv } from './ReviewStyle'
import SearchIcon from '@mui/icons-material/Search';
import UserReview from './UsersReview/UserReview';

const Review = () => {
  return (
    <>
    <Container>
        <Header>
            <h1>Our user reviews</h1>
            <SearchDiv>
              <span><SearchIcon style={{fontSize:"30px"}} /> </span>
            <input type="text" placeholder='Search For your category ' />
            </SearchDiv>  
        </Header>
        <UserReview/>
    </Container>
    </>
  )
}

export default Review