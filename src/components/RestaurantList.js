import React from "react";
import RestaurantCard from "./RestaurantCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 95%;
`;

const RestaurantList = props => {
  const dynamicList = props.searchResults.length
    ? props.searchResults
    : props.restaurants;

  if (!props.isLoading && props.restaurants.length < 1) {
    return (
      <Container>
        <h2 style={{ fontSize: "3.2rem" }}>Add Some Passport Entries!</h2>
      </Container>
    );
  } else {
    return (
      <Container>
        {dynamicList.map(res => (
          <RestaurantCard key={res.id} restaurant={res} />
        ))}
      </Container>
    );
  }
};

export default RestaurantList;
