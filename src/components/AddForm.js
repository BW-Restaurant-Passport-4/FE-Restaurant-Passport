import React, { useState, useContext, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withRouter } from "react-router-dom";

import { passportContext } from "../contexts/passportContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFormHeader from "./headers/AddFormHeader";

const initialFormState = {
  restaurant_name: "",
  restaurant_address: "",
  restaurant_city: "",
  restaurant_zip: "",
  restaurant_phone_number: "",
  restaurant_website: "",
  restaurant_rating: 1,
  restaurant_notes: "",
  restaurant_stamped: false
};

const AddForm = props => {
  const { isEditing, setIsEditing, itemToEdit, setItemToEdit } = useContext(
    passportContext
  );
  const [formData, setFormData] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditing) {
      setFormData({ ...itemToEdit, restaurant_stamped: false });
    }
  }, [isEditing, itemToEdit]);

  const handleChange = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = e => {
    e.preventDefault();
    setFormData({ ...formData, restaurant_rating: Number(e.target.value) });
  };

  const handleStampedChange = e => {
    e.preventDefault();
    setFormData({
      ...formData,
      restaurant_stamped: !formData.restaurant_stamped
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (isEditing) {
      axiosWithAuth()
        .put(`/restaurants/${itemToEdit.id}`, formData)
        .then(() => {
          setIsEditing(false);
          setItemToEdit({});
          setFormData(initialFormState);
          setIsLoading(false);
          props.history.push("/dashboard");
        })
        .catch(err => {
          setIsLoading(false);
          setError(err.message);
          console.log("Put request error: ", err);
        });
    } else {
      axiosWithAuth()
        .post("/restaurants", formData)
        .then(() => {
          setIsLoading(false);
          setFormData(initialFormState);
          props.history.push("/dashboard");
        })
        .catch(err => {
          setIsLoading(false);
          setError(err.message);
          console.log("Add form post error: ", err);
        });
    }
  };

  if (isLoading) {
    return (
      <div className="loading">
        <CircularProgress color="secondary" size="100px" />
      </div>
    );
  } else {
    return (
      <div className="addFormContainer">
        <AddFormHeader />
        {isEditing ? (
          <h2>Edit a Passport Entry</h2>
        ) : (
          <h2>Add a Passport Entry</h2>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="restaurant_name"
            onChange={handleChange}
            value={formData.restaurant_name}
            placeholder="name"
            required
          />

          <input
            type="text"
            name="restaurant_address"
            onChange={handleChange}
            value={formData.restaurant_address}
            placeholder="address"
            required
          />

          <input
            type="text"
            name="restaurant_city"
            onChange={handleChange}
            value={formData.restaurant_city}
            placeholder="city"
            required
          />

          <input
            type="text"
            name="restaurant_zip"
            onChange={handleChange}
            value={formData.restaurant_zip}
            placeholder="zip code"
            required
          />

          <input
            type="tel"
            name="restaurant_phone_number"
            onChange={handleChange}
            value={formData.restaurant_phone_number}
            placeholder="phone number"
            required
          />

          <input
            type="text"
            name="restaurant_website"
            onChange={handleChange}
            value={formData.restaurant_website}
            placeholder="url"
            required
          />

          <div className="formRow">
            <label htmlFor="addFormRating">Your Rating</label>
            <select
              type="select"
              name="restaurant_rating"
              id="addFormRating"
              onChange={handleRatingChange}
              value={formData.restaurant_rating}
              placeholder="rating"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>

          <textarea
            type="textarea"
            name="restaurant_notes"
            onChange={handleChange}
            value={formData.restaurant_notes}
            placeholder="notes"
            required
            cols="30"
            rows="5"
          />

          <div className="stampedForm">
            <label htmlFor="addFormStamped">Eaten here?</label>
            <input
              type="checkbox"
              name="restaurant_stamped"
              id="addFormStamped"
              onChange={handleStampedChange}
              value={formData.restaurant_stamped}
            />
          </div>

          <div className="formBtns">
            <button>Submit</button>
            <button
              onClick={() => {
                setFormData(initialFormState);
                setIsEditing(false);
                setItemToEdit({});
              }}
            >
              Reset
            </button>
            <button
              onClick={() => {
                setFormData(initialFormState);
                setIsEditing(false);
                setItemToEdit({});
                props.history.push("/dashboard");
              }}
            >
              Cancel
            </button>
          </div>
        </form>
        {error && <h2>{error}</h2>}
      </div>
    );
  }
};

export default withRouter(AddForm);
