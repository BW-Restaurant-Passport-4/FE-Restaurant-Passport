import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
    background: #311D3F;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    height: 85px;
    h2 {
        margin-left: 10px;
        font-size: 3.5rem;
    }
  `
const Btn4 = styled.button`
    background: #522546;
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
    color: white;
    margin-right: 20px;
    padding: 11px 20px;
    cursor: pointer;
    &:hover {
      background: rgba(136,48,78);
    }
  `
const LoginHeader = props => {

  return (

    <Nav>
      <h2 onClick={() => props.history.push("/")}>Restaurant Passport</h2>

      <Btn4 onClick={() => props.history.push("/register")}>Register</Btn4>

    </Nav>
  )
}
export default withRouter(LoginHeader);