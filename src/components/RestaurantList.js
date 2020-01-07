import React from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = props => {
  return (
    <div>
      {props.restaurants.map(res => (
        <RestaurantCard key={res.id} restaurant={res} />
      ))}
    </div>
  );
};

export default RestaurantList;
