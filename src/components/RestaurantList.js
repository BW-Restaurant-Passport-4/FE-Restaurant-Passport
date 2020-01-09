import React from "react";
import RestaurantCard from "./RestaurantCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RestaurantList = props => {
  const dynamicList = props.searchResults.length
    ? props.searchResults
    : props.restaurants;
  return (
    <Container>
      {dynamicList.map(res => (
        <RestaurantCard key={res.id} restaurant={res} />
      ))}
    </Container>
  );
};

export default RestaurantList;
