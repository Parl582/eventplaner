import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    max-width: 100%;
`

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
flex-direction: column;
margin: 30px 0;
position: relative;

    h1{
        font-weight: 500;
        text-transform: uppercase;
        font-size: 1.625rem;
        background: #9C0207;
background: -webkit-linear-gradient(to top left, #9C0207 0%, #242E2E 100%);
background: -moz-linear-gradient(to top left, #9C0207 0%, #242E2E 100%);
background: linear-gradient(to top left, #9C0207 0%, #242E2E 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;


        @media  (max-width: 768px){
            font-size: 1.15rem;
        }
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
    }
    
    input{
        padding: 20px 60px;
        border-radius: 999px;
        width: 100%;
        border: 1px solid gray;
        outline: none;

        ::placeholder{
            font-size: 1.325rem;
            color: gray;
            padding-left: 30px;
            
        }

        @media screen and (max-width: 768px){
            ::placeholder{
                font-size: 0.87rem;
                padding:0;

            }
        }
    }
    @media screen and (max-width: 768px){
        width: 50%;
    }
    @media screen and (max-width: 568px){
        width: 70%;
    }
`