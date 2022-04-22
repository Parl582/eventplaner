import React, { useEffect } from 'react'
import styled from 'styled-components'
import  Header  from '../../common/Header'
import img from '../../images/1stm.png'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import share from '../../images/share.png'
import colorstar from '../../images/colorstar.png'
import StarIcon from '@mui/icons-material/Star';
import { useLocation } from 'react-router-dom';


const Container = styled.div`
    width: 100%;

` 
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

`
const LeftSide = styled.div`
  /* flex: 2; */
  width: 60%;
  padding: 20px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 820px) {
    width: 100%;
    padding: 10px;

  }
` 

const RightSide = styled.div`
  width: 40%;
  height: 600px;
  position: relative;

  span{
        position: absolute;
        width: 55px;
        padding:  3px 5px;
        background-color: #21b53f;
        display: flex;
        right: 10px;
        top: 20px;
        border-radius: 2px;
        justify-content: space-between;
        align-items: center;
        color: #fff;


        @media screen and (max-width: 568px) {
          top: 40px;
          right: 0;
        }
     
    }

    @media screen and (max-width: 820px) {
      width: 100%;
      height: auto;

    }

`
const ImageWrapper = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 10px;
  overflow: hidden;
  padding-left: 100px;
  position: relative;


  @media screen and (max-width: 1200px) {
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

  }


  @media screen and (max-width: 820px) {
    padding-left: 0;
    height: 260px;
  }

  img{
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    
  }
`
const Heading = styled.div`
position: absolute;
top: 50px;
left: 120px;
height: 56px;
width: 206px;
background:#fa4970;
color: #fff;
border-top-right-radius: 30px;
border-bottom-right-radius: 30px;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.625rem;
font-weight: 500;
@media screen and (max-width: 1200px) {
  left: 22px;

}

@media screen and (max-width: 820px) {
    left: 10px;
    height: 30px;
    width: 120px;
    font-size: 1rem;
  }
`
const Headings = styled.div`
height: 56px;
width: 206px;
position: absolute;
top: 50px;
right: 20px;
background: #dfdfdf;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.625rem;
font-weight: 500;
border-top-left-radius: 30px;
border-bottom-left-radius: 30px;
cursor: pointer;

@media screen and (max-width: 820px) {
    right: 10px;
    height: 30px;
    width: 120px;
    font-size: 1rem;
  }

`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  
  
`

const Upperpart = styled.div`
  padding: 30px 20px;

  h2{
    padding-top: 30px ;
    font-size: 1.625rem;
    font-weight: 500;

    @media screen and (max-width: 568px) {
      font-size: 1.15rem;
    }
  }

  p{
    color: #A1A1A1;
    padding-top: 30px ;

    @media screen and (max-width: 568px) {
      font-size: 0.821rem;
      padding-top: 10px;
    }
  }
  h3{
    color: #fa4970;
    padding-top: 30px ;
  }

  @media screen and (max-width: 568px) {
    padding: 15px;

  }

 
`

const BtnDiv = styled.div`

  width: 100%;
  padding: 0px 20px;
  display: flex;
  

  button{
    display: flex;
    align-items: center;
    width: 116px;
    height: 34px;
    border: none;
    padding: 6px 0;
    background: transparent;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;

    img{
      width: 27px;
      margin-right: 10px;
    }
    :nth-child(2){
      margin-left: 10px;
      width: auto;
    }

    @media screen and (max-width: 678px) {
      font-size: 0.91rem;

  }
}

  

`
const LowerBtn = styled.div`
  padding: 20px ;
  display: flex;
  flex-direction: column;

  button{
    width: 250px;
    height: 56px;
    border-radius: 50px;
    margin: 10px 30px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 400;
    color: #fff;

    background-color: #fa4970;

    :nth-child(2){
      background-color: #21b53f;
    }

    @media screen and (max-width: 768px) {


        width: 200px;
        height: 35px;
        font-size: 1rem;


        }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 0; */
  }
`
const ArtistDetails = (location) => {

  console.log(location)

  const {from, name, price,perhead } = location.location



  useEffect (()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Container>
        <Header/>
        <MainContainer>
          <LeftSide>
            <ImageWrapper>
              <img src={img} alt="" />
            </ImageWrapper>   
            <Heading>
              <p>Most Popular</p>
            </Heading>
            <Headings>
              <KeyboardArrowDownOutlinedIcon style={{marginRight:"10px", fontSize:"36px"}} /> 
              <span> 81 Photos</span>
            </Headings>
          </LeftSide>

          {/* rightSide Design */}

          <RightSide>
            <Wrapper>
              <Upperpart>
              <h2>{name} </h2>
              <p>{from} </p>
              <h3>Rs {price} </h3>
              <p>For bride full mehndi(See full pricelist)</p>
              </Upperpart>
              <BtnDiv>
                <button> <img src={share} alt="" /> Share</button>
                <button> <img src={colorstar} alt="" /> Write review</button>
              </BtnDiv>
              <LowerBtn>
                <button>CONTRACT</button>
                <button>CHAT/CALL</button>
              </LowerBtn>
            </Wrapper>
                   <span>
                        < StarIcon style={{color:"#fff", }} />
                        <p>5.0</p>
                    </span>      
          </RightSide>
        </MainContainer>
    </Container>
    </>
  )
}

export default ArtistDetails