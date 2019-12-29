import React, { useEffect, useContext } from "react";
import { passportContext } from "../contexts/passportContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { userContext } from "../contexts/userContext";
import RestaurantList from "./RestaurantList";

const Dashboard = props => {
  const { restaurantList, setRestaurantList } = useContext(passportContext);
  const { user } = useContext(userContext);

  useEffect(() => {
    axiosWithAuth()
      .get("/restaurants")
      .then(res => {
        console.log(res);
        setRestaurantList(res.data);
      })
      .catch(err => console.log("Error fetching: ", err));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>{user}</h3>

      <RestaurantList restaurants={restaurantList} />
    </div>
  );
};

export default Dashboard;
