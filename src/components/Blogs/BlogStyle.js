import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    max-width: 100%;
    padding: 20px 35px;
`
export const Header = styled.div`
margin: 20px 0;
h2{
    font-size: 1.625rem;
    font-weight: 500;
    margin-bottom: 10px;
    background: #FA345C;
background: -webkit-linear-gradient(to bottom right, #FA345C 0%, #3A3173 100%);
background: -moz-linear-gradient(to bottom right, #FA345C 0%, #3A3173 100%);
background: linear-gradient(to bottom right, #FA345C 0%, #3A3173 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;


    @media screen and (max-width: 768px){
        font-size: 1.15rem;

    }

}
p{
    line-height: 2rem;
    color: #bbbbbb;
    font-size: 1.3rem;
    text-transform: uppercase;

    @media screen and (max-width: 768px){
        font-size: 1rem;
        line-height: 1.5rem;
    }
}
    
`

export const SmallBox = styled.div`
    min-width :240px ;
    height: 230px;
    border-radius: 8px;
    margin-right: 20px;
    display: inline-block;
    cursor: pointer;
    -webkit-box-shadow: 0px 2px 1px 0px rgba(217,208,217,1);
    -moz-box-shadow: 0px 2px 1px 0px rgba(217,208,217,1);
    box-shadow: 0px 2px 1px 0px rgba(217,208,217,1);
    margin-bottom: 10px;
   
`
export const OverFlow = styled(motion.div)`

    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px 0;

 
`
export const ImageContainer = styled.div`
    width: 100%;
    height: 50%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;     
    }

`
export const Heading = styled.div`

    width: 100%;
    height: 50%;
    background-color: smokewhite;
    overflow: hidden;
    padding: 10px;
    position: relative;
    h5{
       
       margin-top: 5px;
       font-size: 0.81rem;
       font-weight: 300;
       text-transform: uppercase;
       position: absolute;
       bottom: 15px;
       color: #bbbbbb;
   }


`
export const Details = styled.div`
    /* border: 1px solid; */
    width: 100%;
    overflow: hidden;
    word-wrap: break-word;
    font-size: 0.9rem;
    position: relative;
    white-space: pre-wrap;
    max-height: 63px;
    margin-bottom: 3px;


`

export const Wrapper = styled(motion.div)`

   
    overflow: hidden;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;



`