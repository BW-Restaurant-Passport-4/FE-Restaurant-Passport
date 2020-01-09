import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
padding-top: 200px;
`
const Welcome = styled.div`
background: #88304E;
height: 100vh;

h2 {
 display: flex;
 justify-content: center;
 align-content: center;
margin-top: 0;
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 72px;
line-height: 98px;
color: #FFFFFF;
}

.btn1 {
display: flex;
justify-content: center;
align-content: center;
width: 494px;
height: 84px;
margin: 0 auto;
margin-bottom: 80px;
margin-top: 100px;
background: #522546;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 56px;
line-height: 76px;


color: #FFFFFF;
}

.btn2 {
display: flex;
justify-content: center;
align-content: center;
width: 494px;
height: 84px;
margin: 0 auto;
background: #522546;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 56px;
line-height: 76px;

color: #FFFFFF;
}
`


const WelcomePage = props => {
  return (
    <Welcome>
      <Wrapper>
        <h2>Restaurant Passport</h2>
        <button className="btn1" onClick={() => props.history.push("/login")} >Login</button>
        <button className="btn2" onClick={() => props.history.push("/register")}>Register</button>
      </Wrapper>
    </Welcome>
  );
};

export default WelcomePage;
