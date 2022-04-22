import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FooterData } from '../../common/StaticData'

const Container = styled.div`
    width: 100%;
    padding-bottom: 40px;
    padding-top: 20px;

    @media screen and (max-width: 568px) {

        background-color: #fa4970;
        border-top-right-radius: 50px;
        border-top-left-radius: 2px;
    }

    

`
const HeaderContainer = styled.div`
    width: 100%;
    text-align: center;
    margin: 30px 0;
    h1{
        font-size: 1.625rem;
        font-weight: 500;
        color: #191919;

        background-image: linear-gradient(to right top, #f4f4f4, #e6e6e6, #d8d8d8, #cacaca, #bcbcbc);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;


        @media screen and (max-width: 768px){

            font-size: 1.15rem;
            text-align: start;
            margin-left: 10px;

        }
    
    }
`
const MenuItem = styled.li`
    list-style: none;
    display: flex;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 500;
    

    @media screen and (max-width: 768px){
        display: inherit;
        font-size: 1rem;
       
        
        
    }

`
const NavLinks = styled(NavLink)`
    text-decoration: none;
    margin-bottom: 50px;
    color: #c8222c;
    font-size: 1.25rem;
    display: flex;

    span{
        margin: 0 10px;  
        @media screen and (max-width: 768px){
        margin: 0 5px;
        display: none;

    }
 
    }
    @media screen and (max-width: 768px){
        font-size: 1rem;
        margin: 10px;
        color: #fff;
    }
   
`

const Footer = () => {
  return (
    <>
    <Container>
        <HeaderContainer>
            <h1>  MORE ABOUT US  </h1>
        </HeaderContainer>
        <MenuItem>
            {FooterData.map((data=>(
                <NavLinks to="/" key={data.id}>
                   {data.name}
                    <span>|</span>
                </NavLinks>
            )))}
        </MenuItem>
    </Container>
    </>
  )
}

export default Footer