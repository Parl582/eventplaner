import React, { useEffect, useRef } from 'react'
import { Container, Header, Heading, ImageContainer, OverFlow, SmallBox, Wrapper } from './TrustedStyle'
import { useNavigate } from 'react-router-dom'

const data = [
    {
        id: 1,
        img :require("../../images/3.png"),
        name : 'Mehendi Artist',
    },
    {
        id: 17,
        img : require("../../images/2.png"),
        name : 'Mehendi Artist',
    },
    {
        id: 14,
        img : require("../../images/4.png"),
        name : 'Mehendi Artist',
    },
    {
        id: 13,
        img :require("../../images/5.png"),
        name : 'Mehendi Artist',
    },
    {
        id: 11,
        img : require("../../images/mehendi.png"),
        name : 'Mehendi Artist',
    },
    {
        id: 6,
        img :require("../../images/2.png"),
        name : 'Mehendi Artist',
    },
    {
        id: 7,
        img : require("../../images/mehendi.png"),
        name : 'Mehendi Artist',
    },
    {
        id: 73,
        img : require("../../images/mehendi.png"),
        name : 'Mehendi Artist',
    },

    {
        id: 74,
        img : "../../images/mehendi.png",
        name : 'Mehendi Artist',
    },
    {
        id: 720,
        img : "../../images/mehendi.png",
        name : 'Mehendi Artist',
    },
    {
        id: 722,
        img : "../../images/mehendi.png",
        name : 'Mehendi Artist',
    },
    {
        id: 721,
        img : "../../images/mehendi.png",
        name : 'Mehendi Artist',
    },
]


const TrustedVendor = () => {

    const navigate = useNavigate()
    const [width , setWidth] = React.useState(0)
    const MainContainer1 = useRef();

    useEffect (() => {
        // console.log(MainContainer1.current.scrollWidth, MainContainer1.current.offsetWidth)
        setWidth(MainContainer1.current.scrollWidth - MainContainer1.current.offsetWidth)
    }
    ,[])

  return (
    <>
        <Container>
            <Header>
                <h2>Find Trusted Vendor</h2>
                <span>View All</span>
            </Header>
            <Wrapper  ref={MainContainer1} whileTap={{cursor:"grabbing"}}>
                <OverFlow  drag='x' dragConstraints={{right: 0, left: -width}}>
                    {data.map((item=>(
                        <SmallBox key={item.id}  onClick={()=>navigate('/mehendiArtist',{state:item})}>
                        <ImageContainer>
                            <img src={item.img} alt="" />
                        </ImageContainer>
                        <Heading>
                            <h3>Mehendi Artist</h3>
                        </Heading>
                    </SmallBox>
                    )))}                    
                </OverFlow>
            </Wrapper>
        </Container>   
    </>
  )
}

export default TrustedVendor