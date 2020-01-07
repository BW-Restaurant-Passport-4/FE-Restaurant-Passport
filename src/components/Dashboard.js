import React, { useEffect, useContext, useState } from "react";
import { passportContext } from "../contexts/passportContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import RestaurantList from "./RestaurantList";

const Dashboard = () => {
  const { restaurantList, setRestaurantList } = useContext(passportContext);
  const [username] = useState(localStorage.getItem("username"));

  useEffect(() => {
    axiosWithAuth()
      .get("/restaurants")
      .then(res => {
        setRestaurantList(res.data);
      })
      .catch(err => console.log("Error fetching: ", err));
  }, [setRestaurantList]);

  return (
    <div>
      <h3>{username}</h3>
      <RestaurantList restaurants={restaurantList} />
    </div>
  );
};

export default Dashboard;
