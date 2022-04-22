import styled from 'styled-components';
import img from '../../images/login.png'


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    flex-wrap: wrap;
    height: 100%;
`
export const Wrapper = styled.div`
    flex: 1;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        
        width: 100%;
        flex-basis: 100%;

        :nth-child(1){
            height: 300px;

           
        }
    }


`
export const Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size:cover ;
    background-image:  url(${img});

    p{
        position: absolute;
        bottom: 50px;
        color: #fff;
        font-size: 2rem ;
        padding: 0 30px;
        font-weight: 400;
        @media screen and (max-width: 768px) {
            display: none;

    }
    }

    @media screen and (max-width: 768px) {
        /* background-size: 100% 100%; */
        object-fit: contain;
        background-position: center center;
    }


`
export const Logo = styled.div`
    position: absolute;
    top: 20px;
    left: 30px;
    font-size: 2.5rem;
    color: #fff;
    font-weight: 400;

    @media screen and (max-width: 568px) {
        font-size: 1.91rem;
        left:18px;
    }
`

// ========================right

export const RightContent = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;


    h1{
        font-size: 2.6rem;
        font-weight: 400;
       text-align: center;
        
    @media (max-width: 768px) {
 
        font-size: 1.8rem;
        font-weight: 400;  
        /* margin-top: -180px; */
    
    }
    @media (max-width: 568px) {
        font-size: 1.5rem;
        margin-top: -280px;
    }
    
    }

    h3{
        font-size: 1.7rem;
        font-weight: 400;

            @media (max-width: 768px)
             {        
                font-size: 1.4rem;
                font-weight: 400;        
            }  
            @media screen and (max-width: 568px) {
                     margin-top: -200px;
                }             
    }

`
export const InputEmail = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;

    input{
        padding: 20px 30px;
        border-radius: 999px;
        width: 53%;
        border: 2px solid gray;
        outline: none;
        font-size: 1.5rem;

        ::placeholder{
            font-size: 1.4rem;
            text-align: center;
            color: #ccc;
        }

        @media (max-width: 828px)
             {        
               width: 80%;
               padding: 15px 20px;
            }  
        @media (max-width: 828px)
             {        
               width: 80%;
               padding: 10px 20px;

               ::placeholder{
                   font-size: 1rem;
               }
            }  
    }
    img{
        position: absolute;
        right: 63px;
        width: 63px;
        height: 63px;
        cursor: pointer;

        @media (max-width: 828px)
             {        
               right: 30px;
            }  

        @media (max-width: 768px)
             {        
               right: 40px;
               width: 40px;
               height: 40px;
            }  

    }
    @media screen and (max-width: 568px) {
        margin-top: -200px;

    }
`
export const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    justify-content: space-evenly;
    span{
        display: flex;
        align-items: center;
        cursor: pointer;
        h4{
            margin-left:10px ;
            font-size: 1.7rem;
            font-weight: 400;

            @media screen and (max-width: 568px) {
                font-size: 1rem;
            }
        }
        img{
            width: 50px;
            height: 50px;

            @media screen and (max-width: 568px) {
                width: 30px;
                height: 30px;
            }

        }
    }

    @media screen and (max-width: 568px) {
        margin-top: -170px;
        width: 100%;


    }


`


