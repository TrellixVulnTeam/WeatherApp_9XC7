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
import CurrentForecast from "./CurrentForecast";
import DailyForecast from "./DailyForecast";
import styled from "styled-components/native";
import bgImg from "./4.png";
import { NavigationContainer } from "@react-navigation/native";

export default function PremiumFeatures() {
  const [cardNumber, setCardNumber] = React.useState("");
  const [expire, setExpire] = React.useState("");
  const [toggleSearch, setToggleSearch] = useState("city");
  const [city, setCity] = useState("Toronto");
  const [postalCode, setPostalCode] = useState("");
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [weather, setWeather] = useState({});
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
  useEffect(() => {
    fetchByPostalHandler();
    {
      postalCode === "" ? setLat(null) : null;
    }
    {
      postalCode === "" ? setSearch(false) : null;
    }
  }, [postalCode]);

  const handleSearch = () => {
    setSearch(true);
  };
  //updates the weather when lat long changes
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&units=metric&appid=${openWeatherKey}`,
      { signal }
    )
      .then((res) => res.json())
      .then((data) => {
        search ? setWeather(data) : null;
      })
      .catch((err) => {
        console.log("error", err);
      });
    return () => controller.abort();
  }, [lat, long, search]);

  return (
    <Container>
      <ImageBackground source={bgImg} style={{ width: "100%", height: "100%" }}>
        <View
          style={{
            marginTop: 50,
            flex: 1,
            alignItems: "center",
          }}
        >
          <Text style={{ marginTop: 30 }}>Credit Card :</Text>
          <TextInput
            style={styles.input}
            onChangeText={setCardNumber}
            value={cardNumber}
            placeholder="Credit Card number"
          />

          <Text style={{ marginTop: 30 }}>Expire :</Text>
          <TextInput
            style={styles.input}
            onChangeText={setExpire}
            value={expire}
            placeholder="Expire"
          />

          <View style={{ marginTop: 100 }}>
            <Button
              style={{ marginTop: 2000 }}
              title="PROCEED"
              // onPress={() => Alert.alert("Simple Button pressed")}
            />
          </View>
        </View>
      </ImageBackground>
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  background-color: dodgerblue;
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
  // button: {
  //   // height: 40,
  //   width: 150,
  //   margin: 12,
  //   padding: 10,
  // },
});
