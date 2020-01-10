import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
    background: #311D3F;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: white
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 85px;
    position: fixed;
    top: 0;
    h2 {
        margin-left: 10px;
    }
    
    button {
        background: #522546;
        border: none;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
        margin-right: 20px;
        padding: 11px 20px;
        color: white;
        cursor: pointer;
        &:hover {
            background: rgba(136,48,78);
        }
    }
`
const RegisterHeader = props => {
    return (
        <Header>
            <h2>Restaurant Passport</h2>
            <div>
                <button onClick={() => props.history.push('/login')}>Login</button>
            </div>
        </Header>
    )
}

export default withRouter(RegisterHeader);