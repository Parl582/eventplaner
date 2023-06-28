import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  padding: 10px 50px;

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;

  h5 {
    margin-left: 10px;
    font-size: 1.25rem;
    /* color:#272727; */

    background: #fa4970;
    background: -webkit-linear-gradient(
      to bottom left,
      #fa4970 0%,
      #0a7311 100%
    );
    background: -moz-linear-gradient(to bottom left, #fa4970 0%, #0a7311 100%);
    background: linear-gradient(to bottom left, #fa4970 0%, #0a7311 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 678px) {
    flex-wrap: wrap;
  }
`;
export const Content = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  text-decoration: none;
  list-style: none;

  @media screen and (max-width: 568px) {
    flex-direction: inherit;
  }

  cursor: pointer;
  color: #a1a1a1;
  h5 {
    font-size: 0.875rem;
    font-weight: 300;
  }

  :nth-child(odd) {
    margin-right: 40px;
  }
  :nth-child(even) {
    margin-right: 40px;
  }
`;
export const LogoImage = styled.div`
  padding: 10px;
  border-radius: 999px;
  background-color: #f1e9ea;

  img {
    object-fit: contain;
    width: 60px;
    height: 60px;

    @media screen and (max-width: 678px) {
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (max-width: 678px) {
    margin-right: 20px;
  }
`;
