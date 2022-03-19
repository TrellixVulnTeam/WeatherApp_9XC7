import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  Button,
} from "react-native";
import ForecastSearch from "./ForecastSearch";
import AppButton from "./Button";
import CurrentForecast from "./CurrentForecast";
import DailyForecast from "./DailyForecast";
import Upload from "./upload";
import styled from "styled-components/native";
import bgImg from "./4.png";
import { NavigationContainer } from "@react-navigation/native";

export default function PremiumFeatures({ onPress, title }) {
  const [cardNumber, setCardNumber] = React.useState("");
  const [expire, setExpire] = React.useState("");
  const [toggleSearch, setToggleSearch] = useState("city");
  const [city, setCity] = useState("Toronto");
  const [postalCode, setPostalCode] = useState("");
  const [postalCode1, setPostalCode1] = useState("");
  const [lat, setLat] = useState(null);
  const [lat1, setLat1] = useState(null);
  const [long, setLong] = useState(null);
  const [long1, setLong1] = useState(null);
  const [weather, setWeather] = useState({});
  const [weather1, setWeather1] = useState({});
  const [search, setSearch] = useState(false);
  const controller = new AbortController();
  const signal = controller.signal;

  const openWeatherKey = `d7e82f18598985d5be1b2a02addf2ab1`;
  const googleKey = `AIzaSyAOcthhBz_DSIVgpxfd1lDp4q6V-I6Rmvw`;
  const fetchByPostalHandler = () => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${googleKey}&components=postal_code:${postalCode}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLat(data.results[0].geometry.location.lat);
        setLong(data.results[0].geometry.location.lng);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  const fetchByPostalHandler1 = () => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${googleKey}&components=postal_code:${postalCode1}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLat1(data.results[0].geometry.location.lat);
        setLong1(data.results[0].geometry.location.lng);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  useEffect(() => {
    fetchByPostalHandler1();
    fetchByPostalHandler();
  }, [lat, lat1]);
  const handleSearch = () => {
    fetchByPostalHandler1();
    fetchByPostalHandler();
  };
  //updates the weather when lat long changes
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&units=metric&appid=${openWeatherKey}`,
      { signal }
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [lat, long, postalCode]);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat1}&lon=${long1}&exclude=hourly,minutely&units=metric&appid=${openWeatherKey}`,
      { signal }
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather1(data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [lat1, long1, postalCode1]);

  return (
    <Container>
      <ImageBackground source={bgImg} style={{ width: "100%", height: "100%" }}>
        <View style={styles.row}>
          <ForecastSearch
            setPostalCode={setPostalCode}
            postalCode={postalCode}
          />
          <ForecastSearch
            setPostalCode={setPostalCode1}
            postalCode={postalCode1}
          />
        </View>
        <View style={{ maxWidth: 250, marginLeft: 60 }}>
          <AppButton onPress={handleSearch} title="Search" />
        </View>
        <Row>
          <SecondaryContainer weather={weather} />
          <SecondaryContainer weather={weather1} />
        </Row>
      </ImageBackground>
    </Container>
  );
}
function SecondaryContainer({ weather }) {
  return (
    <SecondaryInfoContainer>
      <DetailsBox>
        <Text>
          <Label>Feels: </Label>
          {weather.current && Math.round(weather.current.feels_like)}
          °C
        </Text>
      </DetailsBox>
      <DetailsBox>
        <Text>
          <Label>Low: </Label>
          {weather.daily && Math.round(weather.daily[0].temp.min)}
          °C
        </Text>
      </DetailsBox>
      <DetailsBox>
        <Text>
          <Label>High: </Label>
          {weather.daily && Math.round(weather.daily[0].temp.max)}
          °C
        </Text>
      </DetailsBox>
      <DetailsBox>
        <Text>
          <Label>Wind: </Label>
          {weather.current && weather.current.wind_speed} m/s
        </Text>
      </DetailsBox>
      <DetailsBox>
        <Text>
          <Label>Humidity: </Label>
          {weather.current && weather.current.humidity}%
        </Text>
      </DetailsBox>
      <DetailsBox>
        <Text>
          <Label>Rain: </Label>
          {weather.daily > 0 ? weather.daily[0].rain : "0"} MM
        </Text>
      </DetailsBox>
    </SecondaryInfoContainer>
  );
}
const Container = styled.View`
  flex: 1;
  background-color: dodgerblue;
`;

const CurrentView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CurrentTempView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MainInfoContainer = styled.View`
  display: flex;
  align-items: center;
`;

const Description = styled.Text`
  color: white;
  font-size: 15px;
  text-transform: capitalize;
`;

const SecondaryInfoContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  display: flex;
  padding: 20px;
  /* align-items: center; */
  justify-content: center;
  margin: 2px;
  width: 50%;
  max-width: 478px;
`;

const WeatherIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

const Timezone = styled.Text`
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 15px;
`;

const CurrentDegrees = styled.Text`
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 60px;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  color: black;
  padding: 10px 30px 10px 30px;
`;

const DetailsBox = styled.View``;

const Label = styled.Text`
  font-size: 18px;
`;

const Details = styled.Text`
  color: black;
  font-size: 15px;
  text-transform: capitalize;
`;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 120,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    borderWidth: 2,
    height: 100,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
