import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.button`{
    
    background: #522546;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    h2 {
        margin-left: 10px;
    }
  `
  const Btn4 = styled.button`
  background: #88304E;
    border: none;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: white;
    margin-right: 5px;
    margin-left: 5px;
    padding: 11px 10px;
  `
  const LoginHeader = props => {

    return(
    
    <Nav>
    <h2 onClick={() => props.history.push("/")}>Restaurant Passport</h2>
    
    <Btn4 onClick={() => props.history.push("/register")}>Register</Btn4>
    
    </Nav>
    )
}
export default withRouter(LoginHeader);