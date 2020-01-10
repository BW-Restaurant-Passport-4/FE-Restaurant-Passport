import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: #88304e;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 85px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  h2 {
    margin-left: 15px;
    font-size: 3rem;
  }
`;

const Btn = styled.button`
  background: #522546;
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: white;
  margin-right: 20px;
  margin-left: 10px;
  padding: 11px 10px;
`;

const Searchbar = styled.input`
  border: none;
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px 10px;
  outline: none;
`;

const DashboardHeader = props => {
  const handleChange = event => {
    props.setSearchTerm(event.target.value);
  };
  return (
    <Nav>
      <h2>Restaurant Passport</h2>
      <div>
        <Searchbar
          type="text"
          placeholder="Search"
          value={props.searchTerm}
          onChange={handleChange}
        />
        <Btn onClick={() => props.history.push("/add_form")}>
          Add Restaurant
        </Btn>
      </div>
    </Nav>
  );
};

export default withRouter(DashboardHeader);
