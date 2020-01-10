import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { passportContext } from "../contexts/passportContext";
import Emoji from "./Emoji";
import { Card } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import styled from "styled-components";

const useStyles = makeStyles(theme => ({
  card: {
    background: "#88304E",
    color: "#FFF",
    width: 500,
    margin: "25px auto",
    padding: "10px",
    fontSize: "2.5rem",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    zIndex: 1
  },
  button: {
    background: "#522546",
    color: "#FFF",
    fontSize: "1.5rem",
    margin: theme.spacing(1),
    zIndex: 0,
  }
}));

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

  const cardStyle = useStyles();

  return (
    <Card className={cardStyle.card}>
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
      <Flex>
        <Button size="large" onClick={deleteRestaurant} className={cardStyle.button} variant="contained" startIcon={<DeleteIcon />}>Delete</Button>
        <Button size="large" onClick={handleEdit} className={cardStyle.button} variant="contained" startIcon={<EditIcon />}>Edit</Button>
        {props.restaurant.restaurant_stamped ? (<CheckBoxIcon style={{ fill: "#52de97", fontSize: "60px" }} />) : (<CheckBoxOutlineBlankIcon style={{ fill: "#FFF", fontSize: "60px" }} />)}
      </Flex>
    </Card>
  );
};

export default withRouter(RestaurantCard);
