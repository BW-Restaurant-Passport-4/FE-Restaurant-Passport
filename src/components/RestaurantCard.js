import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { passportContext } from "../contexts/passportContext";
import Emoji from "./Emoji";
import styled from "styled-components";

const Card = styled.div`
  background: #88304E;
  width: 30%;
  margin: 10px auto;
`






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

  const displayRating = () => {
    let result = [];
    for (let i = 0; i < props.restaurant.restaurant_rating; i++) {
      result.push(Number([i]));
    }
    return result;
  };

  return (
    <Card>
      <h2>{props.restaurant.restaurant_name}</h2>
      <div className="ratingsDiv">
        {displayRating().map(() => {
          return (
            <Emoji
              label="star"
              symbol="⭐"
              key={`${Date.now() * Math.random()}`}
            />
          );
        })}
      </div>
      <p>{props.restaurant.restaurant_address}</p>
      <p>{props.restaurant.restaurant_city}</p>
      <p>{props.restaurant.restaurant_zip}</p>
      <p>{props.restaurant.restaurant_website}</p>
      <p>{props.restaurant.restaurant_notes}</p>
      <button onClick={deleteRestaurant}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </Card>
  );
};

export default withRouter(RestaurantCard);
