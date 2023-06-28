import React, { useState } from 'react'
import styled from 'styled-components'

const Containers = styled.div`
    width: 100%;
    padding: 0px 150px;
    margin-top: 40px;

    p{
        color: #A1A1A1;
        margin: 10px 0;
        font-size: 1rem;

        @media screen and (max-width: 568px) {
            font-size: 0.91rem;
        }
    }
    h3{
        font-size: 1.625rem;
        font-weight: 500;
        margin-bottom: 30px;

        @media screen and (max-width: 568px) {
            font-size: 1.15rem;

        }

    }
    h4{
        margin-top: 30px;
        color: #A1A1A1;
        font-weight: 400;
     
        font-size: 1rem;

        @media screen and (max-width: 568px) {
            font-size: 0.91rem;

        }
    }

    @media screen and (max-width: 1200px) {
        padding: 0px 20px;

    }

`

const Content = styled.div`
    padding: 40px 0;
    position: relative;
    width: 70%;

        span{
            font-size: 1.625rem;
                @media  screen and (max-width: 568px) {
                    font-size: 1.15rem;
                }
            }

    @media screen and (max-width: 768px) {
        width: 100%;
    }

`

const Pricing = (location) => {

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = React.useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };
        return (
          <p>
            {isReadMore ? text.slice(0, 250) : text}
            <span onClick={toggleReadMore} style={{color:'#fa4970', fontSize:"1rem", cursor:"pointer", marginLeft:"5px"}} >
              {isReadMore ? "...read more" : "show less"}
            </span>
          </p>
        );
      };


      const {perhead, price, name ,intro} = location.location


  return (
    <>
    <Containers>
    
        <h3>Pricing</h3>
        <p>BRIDE’S FULL MEHNDI</p>
        <p>₹ {price}</p>
        <h4>FAMILY/GUEST MEHNDI</h4>
        <p>₹ {perhead} per hand</p>
        <h4>PAYMENT POLICY</h4>
        <p>
        20% - At the Time of booking
        </p>
        <p>
            80% - On Event date
        </p>
        <p>
            0% - After deliverables are delivered
        </p>

        <Content>
            <span>About</span>
            <h4> INTRODUCTION </h4>
            <p >
                <ReadMore>

                    {intro}
                    

               
            
                </ReadMore>
            </p>

        </Content>

    </Containers>
    </>
  )
}

export default Pricing