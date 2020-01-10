import React, { useEffect, useContext, useState } from "react";
import { passportContext } from "../contexts/passportContext";
import { userContext } from "../contexts/userContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import RestaurantList from "./RestaurantList";
import DashboardHeader from "./DashboardHeader";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const Container = styled.div`
  background: #311d3f;
  color: white;
  min-height: 100vh;
  padding-top: 85px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Dashboard = () => {
  const { restaurantList, setRestaurantList } = useContext(passportContext);
  const { user, setUser } = useContext(userContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const message = localStorage.getItem("message");
  setUser(message);

  useEffect(() => {
    setIsLoading(true);
    axiosWithAuth()
      .get("/restaurants")
      .then(res => {
        setIsLoading(false);
        setRestaurantList(res.data.reverse());
      })
      .catch(err => {
        setIsLoading(false);
        console.log("Error fetching: ", err);
      });
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
      {isLoading ? (
        <div className="loading">
          <CircularProgress color="primary" size="100px" />
        </div>
      ) : (
          <RestaurantList
            restaurants={restaurantList}
            searchResults={searchResults}
            isLoading={isLoading}
          />
        )}
    </Container>
  );
};

export default Dashboard;
