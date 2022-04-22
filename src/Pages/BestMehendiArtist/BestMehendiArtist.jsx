import React from 'react'
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

const Containers = styled.div`
    width: 100%;
    padding: 50px;

    @media screen and (max-width: 768px) { 
             padding: 20px;
        } 
`
const Heading = styled.div`
    width: 100%;
    margin: 10px 0;
    
    h2{
        font-size: 1.625rem;
        font-weight: 500;

        @media screen and (max-width: 768px) {
            font-size: 1.15rem;
        }
    }
`
const Wrapper = styled.div`
    width: 100%;
    padding: 20px 40px ;
    display: flex;
    align-items: center;

    justify-content: center;
    flex-wrap: wrap;
    @media screen and (max-width: 768px) { 
            padding: 20px 30px;
        }  
`

const SmallContainers = styled.div`
    cursor: pointer;
    width: 270px;
    height: 266px ;
    border-radius: 10px;
    -webkit-box-shadow: 0px 1px 2px 0px rgba(186,186,186,1);
    -moz-box-shadow: 0px 1px 2px 0px rgba(186,186,186,1);
    box-shadow: 0px 1px 2px 0px rgba(186,186,186,1);
    position: relative;
    margin:10px 20px;
    justify-content: center;

    @media screen and (max-width: 1126) { 
             margin: 10px 15px;
        } 
    @media screen and (max-width: 766) { 
             margin: 10px;
             width: 250px;
             height: 246px;
        } 


`
const ImageContainer = styled.div`
    width: 100%;
    height: 119px;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
    }
`
const RatingDiv = styled.div`
    position: relative;
    width: 100%;
    padding: 10px;
    height: 53px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;

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
    }
    h4{
        font-size: 1rem;
        font-weight: 400;
    }
`
const PriceTag = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;

    p{
        color: #fa4970;
    }

    span{
        color: #A1A1A1;
    }
`

const BestMehendiArtist = () => {

    const navigate = useNavigate();

    const data = [
        {
            id: 17,
            price : '5,100',
            img : require('../../images/m5.png'),
            price :"5,100",
            name : "Prakash Mehndi Art",
            from : "Mehndi Artist in Noida",
            perheas : " 150 ",
            intro : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus!"
        },
        {
            id: 17,
            price : '5,100',
            img : require('../../images/m4.png'),
            price :"5,100",
            name : "Prakash Mehndi Art",
            from : "Mehndi Artist in Noida",
            perheas : " 150 ",
            intro : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus!"
        },
        {
            id: 17,
            price : '500',
            img : require('../../images/m3.png'),
            price :"5,100",
            name : "Prakash Mehndi Art",
            from : "Mehndi Artist in Noida",
            perheas : " 150 ",
            intro : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus!"
        },
        {
            id: 17,
            price : '5,100',
            img : require('../../images/m1.png'),
            price :"5,100",
            name : "Prakash Mehndi Art",
            from : "Mehndi Artist in Noida",
            perheas : " 150 ",
            intro : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus!"
        },
        {
            id: 17,
            price : '5,100',
            img : require('../../images/m2.png'),
            price :"5,100",
            name : "Prakash Mehndi Art",
            from : "Mehndi Artist in Noida",
            perheas : " 150 ",
            intro : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus!"
        },
        {
            id: 17,
            price : '5,100',
            img : require('../../images/m3.png'),
            price :"5,100",
            name : "Prakash Mehndi Art",
            from : "Mehndi Artist in Noida",
            perheas : " 150 ",
            intro : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus!"
        },
        {
            id: 17,
            price : '5,100',
            img : require('../../images/m8.png'),
            price :"5,100",
            name : "Prakash Mehndi Art",
            from : "Mehndi Artist in Noida",
            perheas : " 150 ",
            intro : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolor ea? Eligendi repellat, assumenda tempora enim at amet ipsa, reiciendis asperiores a fugiat veritatis. Aperiam nostrum placeat ducimus praesentium accusamus!"
        },
       
    ]

  return (
    <>
    <Containers>
        <Heading><h2>Best mehndi artist in noida for your occasion</h2></Heading>
        <Wrapper>
            {data.map((item=>(
            <SmallContainers onClick={()=>navigate('/details',{state:item})} key={item.id}>
                <ImageContainer>
                    <img src= {item.img} alt="" />
                </ImageContainer>
                <RatingDiv>
                    <h4>Prakash Mehndi Art</h4>
                    <span> < StarIcon style={{color:"#fff", }} /> <p>5.0</p> </span>
                </RatingDiv>
                <PriceTag> <p> ₹{item.price} </p>
                    <span>For bride full mehndi</span>
                </PriceTag>
            </SmallContainers>
            )))}
        </Wrapper>
    </Containers>
    </>
  )
}

export default BestMehendiArtist