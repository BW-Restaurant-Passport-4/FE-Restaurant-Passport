import React from "react";

const RestaurantCard = ({ res }) => {
  return (
    <div>
      <h2>{res.restaurant_name}</h2>
      <p>{res.restaurant_address}</p>
      <p>{res.restaurant_city}</p>
      <p>{res.restaurant_zip}</p>
      <p>{res.restaurant_website}</p>
      <p>{res.restaurant_rating}</p>
      <p>{res.restaurant_notes}</p>
    </div>
  );
};

export default RestaurantCard;
