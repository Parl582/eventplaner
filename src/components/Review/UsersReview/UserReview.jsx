import { motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'



const Containers = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const MainContainer = styled.div`
    overflow: hidden;
    width: 80%;
    overflow: hidden;
    padding: 30px 0;

    @media screen and (max-width: 768px){

        width: 90%;
    }

  
`
const Wrapper = styled(motion.div)`
    width: 100%;
    display: flex;
    align-items: center;
`
const SmallContainer = styled(motion.div)`
   min-width: 350px;
    height: 420px;
    border: 1px solid #373737cc;
    border-radius: 10px;
    margin:  20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    overflow: hidden;
    padding: 20px 10px;
    cursor: grab;
    transition: all 0.3s ease-in-out;

    :hover{

        transform: scale(1.1);
    }

    img{
        width: 90px;
        height: 90px;
        border-radius: 50%;
        @media screen and (max-width: 768px){
            width: 70px;
            height: 70px;
        }

    }
    span{
        font-weight: 500;
        font-size: 1.25rem;
              
        @media screen and (max-width: 768px){
            font-size: 1rem;
        }
    }
    p{
        font-size: 0.875rem;
        color: gray;
              
        @media screen and (max-width: 768px){
            font-size: 0.75rem;
       
        }
    }
    h5{
        font-size: 1.25rem;
        font-weight: 500;
        color: #fa4a6f;
              
        @media screen and (max-width: 768px){
            font-size: 1rem;
        }
    }
    hr{
        
        width: 70%;
        height: 2.6px;
        background-color: #9b4558;
    }
    h6{
        text-align: center;
        font-size: 0.875rem;;
        color: gray;
        font-weight: 300;
        
        @media screen and (max-width: 768px){
            font-size: 0.75rem;
            padding: 0 20px;
       
        }
    }

    @media screen and (max-width: 768px){
        width: 150px;
        height: 380px;
        padding: 10px 5px;
        border: none;
        margin: 10px;
       
    }
`

const UserReview = () => {

   const data = [
        {
            id: 14,
            img :require("../../../images/a2.png") ,
            des : ""
        },
        {
            id: 13,
            img :require("../../../images/a3.png") ,
            des : ""
        },
        {
            id: 12,
            img :require("../../../images/a4.png") ,
            des : ""
        },
        {
            id: 150,
            img :require("../../../images/a5.png") ,
            des : ""
        },
        {
            id: 153,
            img :require("../../../images/a5.png") ,
            des : ""
        },
        {
            id: 152,
            img :require("../../../images/a5.png") ,
            des : ""
        },
        {
            id: 151,
            img :require("../../../images/a5.png") ,
            des : ""
        },
        {
            id: 189,
            img :require("../../../images/a5.png") ,
            des : ""
        },
    ]

    const [width , setWidth] = React.useState(0)
    const MainContainer1 = useRef();

    useEffect (() => {
        // console.log(MainContainer1.current.scrollWidth, MainContainer1.current.offsetWidth)
        setWidth(MainContainer1.current.scrollWidth - MainContainer1.current.offsetWidth)
    }
    ,[])
  return (
    <>
    <Containers>
        <MainContainer ref={MainContainer1} whileTap={{cursor:"grabbing"}}>
            <Wrapper drag='x' dragConstraints={{right: 0, left: -width}}>

            {data.map((item=>(
            <SmallContainer key={item.id} >
                <img src={item.img} alt="" />
                <span>Arnav Dutta</span>
                <p>Reviewed</p>
                <h5>BTC Entertainment</h5>
                <p>Noida</p>
                <hr />
                <span>Event Organizer</span>
                <h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  a earum est cumque saepe molestias eum alias debitis quam impedit?</h6>
                <h5>Read All Review</h5>
            </SmallContainer>
            )))}
            </Wrapper>
        </MainContainer>
    </Containers>
    </>
  )
}

export default UserReview