import React from 'react'
import { useNavigate } from 'react-router-dom'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import styled from 'styled-components' 


const Container = styled.div`
    width: 100%;

`

export const Headers = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    background-color: #fa4a6f;
    color: #fff;

    @media screen and (max-width: 768px){
        padding: 0 30px;
    }
    @media screen and (max-width: 568px){
        padding: 0 10px;
    }
`
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    
    span{
       
        font-size: 30px;
        cursor: pointer;

    
    }
    h3{
        position: absolute;
        margin: 20px;
        font-size: 1.5rem;
        font-weight: 400;
        cursor: pointer;
        left: 30px;
        
            @media screen and (max-width: 568px){
                font-size: 1rem;
                left: 40px;
            }
    }
    h4{
  
        margin:0 20px;
        font-size: 1.5rem;
        font-weight: 400;
   
        cursor: pointer;
        
            @media screen and (max-width: 568px){
                font-size: 1rem;
        
            }
    }
`

const Header = () => {
    const navigate = useNavigate();

  return (
    <>
    <Container>
        <Headers>
                <Wrapper>
                   {/* <span> <MenuIcon /></span> */}
                   {/* <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
                    <h3 onClick={()=>navigate('/home')}>Logo</h3>
                </Wrapper>
                <Wrapper>
                    <h4 onClick={()=>navigate("/")} style={{cursor:"pointer"}}>LOGIN</h4>
                    <span>
                        <FavoriteBorderRoundedIcon />
                    </span>
                </Wrapper>
            </Headers>
    </Container>

    </>
  )
}

export default Header