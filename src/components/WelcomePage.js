import React from "react";
import styled from "styled-components";

const Welcome = styled.div`
 .welcome {
  position: absolute;
  width: 1440px;
  height: 1018px;
  left: 0px;
  top: 6px;
  
  background-image: url("src/restaurant.jpg");
 }

h2 {
  position: absolute;
width: 972px;
height: 89px;
left: 234px;
top: 248px;

font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 72px;
line-height: 98px;
text-align: center;

color: black;
}

.btn1 {
  position: absolute;
width: 494px;
height: 84px;
left: 473px;
top: 434px;

background: #311D3F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
position: absolute;
// width: 143px;
// height: 76px;
// left: 648px;
// top: 434px;

font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 56px;
line-height: 76px;
text-align: center;

color: #FFFFFF;
}

.btn2 {
  position: absolute;
width: 494px;
height: 84px;
left: 473px;
top: 586px;

background: #311D3F;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
position: absolute;
// width: 212px;
// height: 76px;
// left: 613px;
// top: 590px;

font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 56px;
line-height: 76px;
text-align: center;

color: #FFFFFF;
}
`


const WelcomePage = props => {
  return (
    <Welcome className="welcome">
      <h2>Restaurant Passport</h2>
      <button className="btn1" onClick={() => props.history.push("/login")} >Login</button>
      <button className="btn2" onClick={() => props.history.push("/register")}>Register</button>
    </Welcome>
  );
};

export default WelcomePage;
