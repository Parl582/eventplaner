
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';



const Container = styled.div`
    width: 100%;
` 
const Header = styled.div`
    width: 100%;
    text-align: center;

    h1{
        font-size: 1.625rem;
        text-transform: uppercase;
        font-weight: 500;

        @media (max-width: 768px) {
            font-size: 1.15rem;
        }
    }
   
`
const Wrapper = styled.div`
   
    overflow: hidden;
    width: 100%;
    position: relative;
    padding: 20px;
   
`
const SmallContainer = styled.div`
    min-width: 320px;
    height: 342px ;
    border-radius: 10px;
    border: 1px solid #969696;
    /* position: relative; */
    align-items: center; 
    display: flex;
    padding: 20px 0;
    flex-direction: column;
    overflow: hidden;
    display: inline-block;
    margin: 0 20px;
    white-space: pre-wrap;
    cursor: grab;
    transition: all 0.3s ease-in-out;

    :hover{
        transform: scale(1.1);
    }

    @media screen and (max-width: 768px) {
        min-width: 280px;
        height: 320px;
        padding-bottom: 20px;
    }
   
`

const Content = styled.div`
     padding: 10px;
    width: 100%;
    position: relative;
    align-items: center; 
    display: flex;
    flex-direction: column;
    
    span{
        position: absolute;
        width: 55px;
        padding:  3px 5px;
        background-color: #21b53f;
        display: flex;
        right: 0;
        border-radius: 2px;
        justify-content: space-between;
        align-items: center;
        color: #fff;

        p{
            color: #fff;
        }
    }
    
    img{
        width: 66px;
        height: 66px;
        border-radius: 50%;
        object-fit: cover;
    }
    h3{
        margin: 20px;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
    }
    p{

        font-size: 1rem;
        font-weight: 400;
        overflow: hidden;
        color: #3b3b3b;

    }

`

const Slider = styled(motion.div)`
    width: 70%;
    display: flex;
    align-items: center;
    padding: 20px 20px;
`


const LatestMendiReview = ({Name}) => {

    const [width , setWidth] = React.useState(0)
    const MainContainer1 = useRef();

    useEffect (() => {
        // console.log(MainContainer1.current.scrollWidth, MainContainer1.current.offsetWidth)
        setWidth(MainContainer1.current.scrollWidth - MainContainer1.current.offsetWidth)
    }
    ,[])

    const data = [
        {
            id : 19,
            name : "Surbhi Jain",
            review : "Bridal mehndi and ceremony It was an awesome experience with Ravi. Very well organised and fully professional and she knows her job very well. She had used herbal mehndi which remains on my hands for long Very fine work not only for me Rena has taken equally take care of my relatives. ",
            img : require('../../images/1st.png'),
        },
        {
            id : 10,
            name : "Surbhi Jain",
            review : "Bridal mehndi and ceremony It was an awesome experience with Ravi. Very well organised and fully professional and she knows her job very well. She had used herbal mehndi which remains on my hands for long Very fine work not only for me Rena has taken equally take care of my relatives. ",
            img : require('../../images/1st.png'),
        },
        {
            id : 17,
            name : "Surbhi Jain",
            review : "Bridal mehndi and ceremony It was an awesome experience with Ravi. Very well organised and fully professional and she knows her job very well. She had used herbal mehndi which remains on my hands for long Very fine work not only for me Rena has taken equally take care of my relatives. ",
            img : require('../../images/1st.png'),
        },
        {
            id : 11,
            name : "Surbhi Jain",
            review : "Bridal mehndi and ceremony It was an awesome experience with Ravi. Very well organised and fully professional and she knows her job very well. She had used herbal mehndi which remains on my hands for long Very fine work not only for me Rena has taken equally take care of my relatives. ",
            img : require('../../images/1st.png'),
        },
        {
            id : 12,
            name : "Surbhi Jain",
            review : "Bridal mehndi and ceremony It was an awesome experience with Ravi. Very well organised and fully professional and she knows her job very well. She had used herbal mehndi which remains on my hands for long Very fine work not only for me Rena has taken equally take care of my relatives. ",
            img : require('../../images/1st.png'),
        },
        {
            id : 13,
            name : "Surbhi Jain",
            review : "Bridal mehndi and ceremony It was an awesome experience with Ravi. Very well organised and fully professional and she knows her job very well. She had used herbal mehndi which remains on my hands for long Very fine work not only for me Rena has taken equally take care of my relatives. ",
            img : require('../../images/1st.png'),
        },
        {
            id : 15,
            name : "Surbhi Jain",
            review : "Bridal mehndi and ceremony It was an awesome experience with Ravi. Very well organised and fully professional and she knows her job very well. She had used herbal mehndi which remains on my hands for long Very fine work not only for me Rena has taken equally take care of my relatives. ",
            img : require('../../images/1st.png'),
        },
        {
            id : 6,
            name : "Surbhi Jain",
            review : "Bridal mehndi and ceremony It was an awesome experience with Ravi. Very well organised and fully professional and she knows her job very well. She had used herbal mehndi which remains on my hands for long Very fine work not only for me Rena has taken equally take care of my relatives. ",
            img : require('../../images/1st.png'),
        },
        {
            id : 99,
            name : "Surbhi Jain",
            review : "Bridal mehndi and ceremony It was an awesome experience with Ravi. Very well organised and fully professional and she knows her job very well. She had used herbal mehndi which remains on my hands for long Very fine work not only for me Rena has taken equally take care of my relatives. ",
            img : require('../../images/1st.png'),
        },
    ]
 
return (
    <>
    <Container>
        <Header> <h1>{Name} </h1></Header>
          <Wrapper  ref={MainContainer1} whileTap={{cursor:"grabbing"}}>
          <Slider drag='x' dragConstraints={{right: 0, left: -width}} >
            {data.map((item=>(
            <SmallContainer key={item.id}>
                <Content >                            
                <img src= {item.img} alt="" />
                <h3>{item.name}</h3>
                <p> {item.review}</p>
                    <span>
                        < StarIcon style={{color:"#fff", }} />
                        <p>5.0</p>
                    </span>
                </Content>
            </SmallContainer>
              )))}    
            </Slider>
        </Wrapper> 
    </Container>
    </>
  )
}

export default LatestMendiReview