import React from "react";
import {
  Container,
  Header,
  Wrapper,
  Content,
  LogoImage,
} from "./ServicesStyle";
import eye from "../../images/eyes.png";
import eventOrg from "../../images/eventOrg.png";
import company from "../../images/company(2).png";
import party from "../../images/party.png";
import reantel from "../../images/reantel.png";
import couple from "../../images/couple.png";
import showevent from "../../images/showevent.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Container>
        <Header>
          <img src={eye} alt="" />
          {/* <h5>Our Services</h5> */}
          <h5>Our Services</h5>
        </Header>
        <Wrapper>
          <Content to="/mehendiArtist">
            <LogoImage>
              <img src={eventOrg} alt="" />
            </LogoImage>
            <h5>Corporate Parties</h5>
          </Content>
          <Content to="/mehendiArtist">
            <LogoImage>
              <img src={company} alt="" />
            </LogoImage>
            <h5>Corporate Parties</h5>
          </Content >
          <Content to="/mehendiArtist">
            <LogoImage>
              <img src={party} alt="" />
            </LogoImage>
            <h5>Party Services</h5>
          </Content>
          <Content to="/mehendiArtist">
            <LogoImage>
              <img src={reantel} alt="" />
            </LogoImage>
            <h5>Party Rental / Suppliers</h5>
          </Content>
          <Content to="/mehendiArtist">
            <LogoImage>
              <img src={couple} alt="" />
            </LogoImage>
            <h5>Weadding Planner</h5>
          </Content>
          <Content to="/mehendiArtist">
            <LogoImage>
              <img src={showevent} alt="" />
            </LogoImage>
            <h5>Show Events</h5>
          </Content>
        </Wrapper>
      </Container>
    </>
  );
};

export default Services;
