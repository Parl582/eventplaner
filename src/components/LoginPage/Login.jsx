import React from 'react'
import { Container, Content, InputEmail, Logo, LogoDiv, RightContent, Wrapper } from './LoginStyle'
import LoginLogo from '../../images/loginLogo.png'
import google from '../../images/google.png'
import facebook from '../../images/facebook.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

  return (
    <>
        <Container>
            <Wrapper>
                <Content>
                    <Logo>
                        LOGO
                    </Logo>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis facilis doloribus similique asperiores, blanditiis nulla quas expedita harum laboriosam ipsam, molestiae accusantium porro quisquam quod. Et temporibus vel accusantium doloremque!</p>
                </Content>
            </Wrapper>
            <Wrapper>
                <RightContent>
                        <h1>Log in to event Planner</h1>
                    <InputEmail>
                        <input type="text" placeholder='Enter Mobile no. or Email'/>             
                        <img src={LoginLogo} alt="" onClick={()=>navigate('/home')}/>
                    </InputEmail>         
                    <h3>Or Continue with</h3>
                    <LogoDiv>
                        <span>
                            <img src={google} alt="" />
                            <h4>Google</h4>
                        </span>
                        <span>
                            <img src={facebook} alt="" />
                            <h4>Facebook</h4>
                        </span>
                    </LogoDiv>
                </RightContent>
            </Wrapper>
        </Container>
    </>
  )
}

export default Login