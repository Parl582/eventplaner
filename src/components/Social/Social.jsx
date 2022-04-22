import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Container = styled.div`
    width: 100%;
    margin: 20px 0;
`

const Header = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0;

    h1{
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.625rem;
        background: #9C0207;
background: -webkit-linear-gradient(to top left, #9C0207 0%, #242E2E 100%);
background: -moz-linear-gradient(to top left, #9C0207 0%, #242E2E 100%);
background: linear-gradient(to top left, #9C0207 0%, #242E2E 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;


        @media screen and (max-width: 768px){
            font-size: 1.15rem;

        }
    }
`
const BtnDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #fff;
    }
    button{
        width: 50%;
        margin: 10px 0;
        padding: 8px 0;
        text-align: center;
        border: none;
        border-radius: 999px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 1rem;
      
        background-image: linear-gradient(to right, #b92cac, #a738be, #8f44cf, #6c50de, #2a5aeb);
        :nth-child(2){
            background-image: linear-gradient(to right, #7595f5, #6487f3, #5278f1, #3f69ef, #2a5aeb);
            
        }
        :nth-child(3){
            background-image: linear-gradient(to right, #ec5760, #e34b53, #db3e46, #d13139, #c8222c);
        }
        p{
            font-size: 1rem;
            font-weight: 500;
            margin-left: 10px;
        }

        @media screen and (max-width: 768px){
            width: 80%;
            padding: 2px 0;
        }
    }
`


const Social = () => {
  return (
    <>
    <Container>

        <Header>
            <h1>Flow us for more ideas and fun</h1>
        </Header>
        <BtnDiv>
    
        <button  >
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <InstagramIcon style={{fontSize:"40px"}} />            
                <p>@parl009 </p>
            </a>
        </button>  

        <button>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <FacebookOutlinedIcon style={{fontSize:"40px"}}     />                 
            <p>@parl009 </p>
        </a>
        </button>

        <button>
            <a href="https://www.pinterest.com" target="_blank" rel="noreferrer"><PinterestIcon style={{fontSize:"40px"}}/><p>@parl009 </p> </a>    
        </button>
        </BtnDiv>
    </Container>

    </>
  )
}

export default Social