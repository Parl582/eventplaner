import React, { useEffect, useRef } from 'react'
import { Container, Details, Header, Heading, ImageContainer, OverFlow, SmallBox, Wrapper } from './BlogStyle'


const data = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque accusamus laborum dolorum quaerat maxime quia commodi laudantium et. Accusamus deleniti animi cupiditate nisi ipsam quasi rem aliquid nihil ratione.',
        img:require("../../images/bridal.png"),
        weeding: ' weeding Songs  09 Jun 2020',

    },
    {
        id: 14,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque accusamus laborum dolorum quaerat maxime quia commodi laudantium et. Accusamus deleniti animi cupiditate nisi ipsam quasi rem aliquid nihil ratione.',
        img: require("../../images/b1.png"), 
        weeding: ' weeding Songs  09 Jun 2020',

    },
    {
        id: 112,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque accusamus laborum dolorum quaerat maxime quia commodi laudantium et. Accusamus deleniti animi cupiditate nisi ipsam quasi rem aliquid nihil ratione.',
        img: require("../../images/b3.png"),
        weeding: ' weeding Songs  09 Jun 2020',

    },
    {
        id: 144,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque accusamus laborum dolorum quaerat maxime quia commodi laudantium et. Accusamus deleniti animi cupiditate nisi ipsam quasi rem aliquid nihil ratione.',
        img:require("../../images/b6.png"),
        weeding: ' weeding Songs  09 Jun 2020',

    },
    {
        id: 133,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque accusamus laborum dolorum quaerat maxime quia commodi laudantium et. Accusamus deleniti animi cupiditate nisi ipsam quasi rem aliquid nihil ratione.',
        img:require("../../images/b1.png"),
        weeding: ' weeding Songs  09 Jun 2020',

    },
    {
        id: 1555,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque accusamus laborum dolorum quaerat maxime quia commodi laudantium et. Accusamus deleniti animi cupiditate nisi ipsam quasi rem aliquid nihil ratione.',
        img: require("../../images/b3.png"),
        weeding: ' weeding Songs  09 Jun 2020',

    },
    {
        id: 155,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque accusamus laborum dolorum quaerat maxime quia commodi laudantium et. Accusamus deleniti animi cupiditate nisi ipsam quasi rem aliquid nihil ratione.',
        img: require("../../images/b3.png"),
        weeding: ' weeding Songs  09 Jun 2020',

    },
    {
        id: 195,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque accusamus laborum dolorum quaerat maxime quia commodi laudantium et. Accusamus deleniti animi cupiditate nisi ipsam quasi rem aliquid nihil ratione.',
        img: require("../../images/b3.png"),
        weeding: ' weeding Songs  09 Jun 2020',

    },
    {
        id: 1505,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque accusamus laborum dolorum quaerat maxime quia commodi laudantium et. Accusamus deleniti animi cupiditate nisi ipsam quasi rem aliquid nihil ratione.',
        img: require("../../images/b3.png"),
        weeding: ' weeding Songs  09 Jun 2020',

    },
    {
        id: 1575,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque accusamus laborum dolorum quaerat maxime quia commodi laudantium et. Accusamus deleniti animi cupiditate nisi ipsam quasi rem aliquid nihil ratione.',
        img: require("../../images/b3.png"),
        weeding: ' weeding Songs  09 Jun 2020',

    },
    {
        id: 1655,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque accusamus laborum dolorum quaerat maxime quia commodi laudantium et. Accusamus deleniti animi cupiditate nisi ipsam quasi rem aliquid nihil ratione.',
        img: require("../../images/b3.png"),
        weeding: ' weeding Songs  09 Jun 2020',

    },
    {
        id: 1755,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eaque accusamus laborum dolorum quaerat maxime quia commodi laudantium et. Accusamus deleniti animi cupiditate nisi ipsam quasi rem aliquid nihil ratione.',
        img: require("../../images/b3.png"),
        weeding: ' weeding Songs  09 Jun 2020',

    },
]


const Blogs = () => {
    const [width , setWidth] = React.useState(0)
    const MainContainer1 = useRef();

    useEffect (() => {
        
        setWidth(MainContainer1.current.scrollWidth - MainContainer1.current.offsetWidth)
    }
    ,[])
 
    
  return (
    <>
    <Container>
        <Header>
            <h2>Our Latest Blog !</h2>
            <p>From Ideas to vendor see how they did it</p>
        </Header>
        <Wrapper ref={MainContainer1} whileTap={{cursor:"grabbing"}}>
        <OverFlow  drag="x" dragConstraints={{right: 0, left: -width}} >
            {data.map((item=>(
                    <SmallBox key={item.id}>
                        <ImageContainer>
                            <img src={item.img} alt="" />
                        </ImageContainer>
                        <Heading>
                            <Details>
                                <p>{item.title} </p>
                            </Details>
                            <h5>
                                {item.weeding}
                            </h5>
                        </Heading>
                    </SmallBox>
            )))}
        </OverFlow>
        </Wrapper>
    </Container>
    </>
  )
}

export default Blogs