import React from "react";
import { View, Text, TextInput } from "react-native";
import styled from "styled-components/native";

const ForecastSearch = ({
  toggleSearch,
  setToggleSearch,
  city,
  setCity,
  fetchLatLongHandler,

  fetchByPostalHandler,
  setPostalCode,
  postalCode,
}) => {
  const handleSubmit = (e) => {
    fetchByPostalHandler();
  };

  const setToggleByPostal = () => {
    setToggleSearch("postal".toUpperCase);
  };

  return (
    <Container>
      <SearchCity
        onChangeText={setPostalCode}
        value={postalCode}
        placeholder="Search By Postal Code"
        // onSubmitEditing={handleSubmit}
      />
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-top: 3px;
`;

const Buttons = styled.Button`
  color: black;
  background-color: gray;
`;

const SearchBy = styled.View`
  display: flex;
  flex-direction: row;
  color: white;
  margin-top: 10px;
  align-items: center;
  justify-content: flex-start;
  width: 95%;
  max-width: 700px;
`;

const ButtonLabel = styled.Text`
  color: white;
  margin-right: 10px;
`;

const SearchCity = styled.TextInput`
  height: 50px;
  margin: 12px;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  width: 95%;
  max-width: 700px;
`;

export default ForecastSearch;
