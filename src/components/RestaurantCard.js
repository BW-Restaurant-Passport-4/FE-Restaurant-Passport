import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { passportContext } from "../contexts/passportContext";

const RestaurantCard = props => {
  const { setIsEditing, setItemToEdit, setRestaurantList } = useContext(
    passportContext
  );

  const fetchRestaurant = () => {
    axiosWithAuth()
      .get("/restaurants")
      .then(res => {
        setRestaurantList(res.data);
      })
      .catch(err => console.log("Error fetching: ", err));
  };

  const deleteRestaurant = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/restaurants/${props.restaurant.id}`)
      .then(() => {
        fetchRestaurant();
      })
      .catch(err => {
        console.log("Error deleting: ", err);
      });
  };

  const handleEdit = e => {
    e.preventDefault();
    setIsEditing(true);
    setItemToEdit(props.restaurant);
    props.history.push("/add_form");
  };
  return (
    <div>
      <h2>{props.restaurant.restaurant_name}</h2>
      <p>{props.restaurant.restaurant_address}</p>
      <p>{props.restaurant.restaurant_city}</p>
      <p>{props.restaurant.restaurant_zip}</p>
      <p>{props.restaurant.restaurant_website}</p>
      <p>{props.restaurant.restaurant_rating}</p>
      <p>{props.restaurant.restaurant_notes}</p>
      <button onClick={deleteRestaurant}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default withRouter(RestaurantCard);
