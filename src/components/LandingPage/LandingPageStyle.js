import styled from 'styled-components';
import HeroImage from '../../images/new.png'
import { motion } from "framer-motion"

export const Container = styled.div`
    width: 100vw;
    max-width: 100%;
    
`
export const Header = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    background-color: #fa4a6f;
    color: #fff;
`
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    
    span{
       
        font-size: 30px           
    }
    h3{
        margin:0 20px;
        font-size: 1.5rem;
        font-weight: 400;
    }
`
export const LandingImage = styled(motion.div)`
    width: 100%;
    background-size: 100% 100%;
    background-position: center center;
    /* height: calc(100vh - 60px); */
    height: 100vh;
    background-image: url(${HeroImage});
    background-size: cover;
    position: relative;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    object-fit:contain ;
    background-attachment: fixed;
    
    h1{
        color: #fff;
        text-align: center;
        line-height: 50px;
        margin-top: 100px;
        font-weight: 500;
        font-size: 2.25rem;

                background: #F6F8F9;
        background: -webkit-radial-gradient(circle farthest-corner at center center, #F6F8F9 0%, #E5EBEE 30%, #D7DEE3 60%, #F5F7F9 100%);
        background: -moz-radial-gradient(circle farthest-corner at center center, #F6F8F9 0%, #E5EBEE 30%, #D7DEE3 60%, #F5F7F9 100%);
        background: radial-gradient(circle farthest-corner at center center, #F6F8F9 0%, #E5EBEE 30%, #D7DEE3 60%, #F5F7F9 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;




        @media screen and (max-width: 768px) { 
             font-size: 1.9rem;
             margin-top: 20px;
           
        } 
        @media screen and (max-width: 678px) { 
            font-size:1.4rem;
            line-height: 20px;
        } 
    }
    button{
        width: 180px;
        height: 48px;
        margin-top: 30px;
        outline: none;
        background-color: #fa4970;
        color: #fff;
        border-radius: 999px;
        border: none;
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: center;
        
        @media screen and (max-width: 568px) {
             width: 120px;
             height: 30px;
        } 
    }

    img{
        width: 15px;
        height: 15px;
        border-radius: 999px;
        margin-right: 7px;
    }
`
export const SearchDiv = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    position: relative;
    span{
        position: absolute;
        left: 30px;   
        color: gray;

        @media screen and (max-width: 678px) { 
         display: none;
        }
    }
    input{
        padding: 0px 60px;
        width: 500px;
        height: 66px;
        border-radius: 999px;
        width: 100%;
        border: none;
        outline: none;
        text-align: center;
        color: gray;

        ::placeholder{
            font-size: 1.4rem;
            color: gray;
            padding-left: 30px;


            @media screen and (max-width: 768px)
                {
                    font-size: 1rem;
                    padding: 0;
                }
           
        }

        @media screen and (max-width: 678px) { 
             width: 200px;
             height: 40px;
             padding: 0 10px;
        } 

    }
`