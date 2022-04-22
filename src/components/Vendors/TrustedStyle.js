import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    max-width: 100%;
    background-color: #000;
    color: #fff;
    margin-top: 20px;
    padding: 35px;
    border-radius: 3px;

    /* height: 599px; */
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span{
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.6rem;
        color: #fa4970;
        cursor: pointer;

        @media screen and (max-width: 768px){
            font-size: 1.15rem;
        }
        @media screen and (max-width: 568px){
            font-size: 0.876rem;
        }
    }
    h2{
       
        font-weight: 500;
        font-size: 1.6rem;
        cursor: pointer;

        background: #FA0000;
background: -webkit-linear-gradient(to left, #FA0000 0%, #C1C979 100%);
background: -moz-linear-gradient(to left, #FA0000 0%, #C1C979 100%);
background: linear-gradient(to left, #FA0000 0%, #C1C979 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;



        @media screen and (max-width: 768px){
            font-size: 1.15rem;
        }
        @media screen and (max-width: 568px){
            font-size: 1.15rem;
            font-weight: 600;
        }
    }

`
export const Wrapper = styled.div`

    margin: 20px 0;
    width:100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SmallBox = styled.div`
    min-width :180px ;
    height: 180px;
    border-radius: 9px;
    margin-right: 20px;
    /* display: inline-block; */
    overflow: hidden;
    cursor: pointer;
`
export const OverFlow = styled(motion.div)`
    display: flex;
    width: 95%;
    cursor: grab;
  
    ::-webkit-scrollbar {
        height: 0px;
    }

    ::-webkit-scrollbar-track {
        background-color: darkgrey;
    }
    
    ::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
 
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 80%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;     
    }

`
export const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
    background-color: #2c2c2c;
    h3{
        font-size: 1rem;
        font-weight: 400;
        text-align: center;

    }

`

