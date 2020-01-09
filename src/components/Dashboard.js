import React, { useEffect, useContext, useState } from "react";
import { passportContext } from "../contexts/passportContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import RestaurantList from "./RestaurantList";
import { withRouter } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import styled from "styled-components";

const Container = styled.div`
  background: #311D3F;
  color: white;
  min-height: 792px;
`

const Dashboard = (props) => {
  const { restaurantList, setRestaurantList } = useContext(passportContext);
  const [username] = useState(localStorage.getItem("username"));
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get("/restaurants")
      .then(res => {
        setRestaurantList(res.data);
      })
      .catch(err => console.log("Error fetching: ", err));
  }, [setRestaurantList]);

  useEffect(() => {
    setSearchResults(restaurantList.filter(res => {
      return res.restaurant_name.toLowerCase().includes(searchTerm.toLowerCase());
    }))
  }, [searchTerm, restaurantList]);

  return (
    <Container>
      <DashboardHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h3>{username}</h3>
      <RestaurantList restaurants={restaurantList} searchResults={searchResults} />
    </Container>
  );
};

export default withRouter(Dashboard);
