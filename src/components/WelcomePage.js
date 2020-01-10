import React from "react";
import styled from "styled-components";
import bgImage from "../images/restaurant.jpg"

const Wrapper = styled.div`
padding-top: 200px;
`
const Welcome = styled.div`
  background: linear-gradient(rgba(136,48,78, 0.3), rgba(136,48,78, 0.5)), url(${bgImage});
  background-size: cover;
  height: 100vh;

  h2 {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 0;
    font-weight: normal;
    font-size: 72px;
    line-height: 98px;
    color: #FFFFFF;
  }

  button {
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 494px;
    height: 84px;
    margin: 0 auto;
    margin: 50px auto;
    background: #522546;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 56px;
    line-height: 76px;
    color: #FFFFFF;
    cursor: pointer;
    &:hover {
      background: rgba(136,48,78);
    }
  }
`


const WelcomePage = props => {
  return (
    <Welcome>
      <Wrapper>
        <h2>Restaurant Passport</h2>
        <button onClick={() => props.history.push("/login")} >Login</button>
        <button onClick={() => props.history.push("/register")}>Register</button>
      </Wrapper>
    </Welcome>
  );
};

export default WelcomePage;
