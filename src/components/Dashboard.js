import React, { useEffect, useContext, useState } from "react";
import { passportContext } from "../contexts/passportContext";
import { userContext } from "../contexts/userContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import RestaurantList from "./RestaurantList";
import { withRouter } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import styled from "styled-components";

const Container = styled.div`
  background: #311d3f;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Dashboard = props => {
  const { restaurantList, setRestaurantList } = useContext(passportContext);
  const { user, setUser } = useContext(userContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const message = localStorage.getItem("message");
  setUser(message);

  useEffect(() => {
    axiosWithAuth()
      .get("/restaurants")
      .then(res => {
        setRestaurantList(res.data);
      })
      .catch(err => console.log("Error fetching: ", err));
  }, [setRestaurantList]);

  useEffect(() => {
    setSearchResults(
      restaurantList.filter(res => {
        return res.restaurant_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
    );
  }, [searchTerm, restaurantList]);

  return (
    <Container>
      <DashboardHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="userMessage">{user}</div>
      <RestaurantList
        restaurants={restaurantList}
        searchResults={searchResults}
      />
    </Container>
  );
};

export default withRouter(Dashboard);
