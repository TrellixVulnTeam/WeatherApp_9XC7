import React, { useEffect, useState } from "react";
import {
  ScrollView,
  ImageBackground,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ForecastSearch from "./components/ForecastSearch";
import CurrentForecast from "./components/CurrentForecast";
import DailyForecast from "./components/DailyForecast";
import Profile from "./components/Profile";
import PremiumFeatures from "./components/PremiumFeatures";
import AppButton from "./components/Button";
import styled from "styled-components/native";
import bgImg from "./assets/4.png";
import rain from "./assets/rain.png";
import sunny from "./assets/sunny.png";
import cloud from "./assets/cloud.png";
import clear from "./assets/clear.png";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
const Feed = () => {
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
  //fetch lat long by city
  // const fetchLatLongHandler = () => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/onecall?&units=metric&exclude=minutely&appid=${openWeatherKey}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLat(data.coord.lat);
  //       setLong(data.coord.lon);
  //     })
  //     .catch((err) => {
  //       console.log("error", err);
  //     });
  // };

  //fetch lat long by postal code/zip since OpenWeather Api only accepts zips
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
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${openWeatherKey}`,

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
        <Search>
          <ForecastSearch
            setPostalCode={setPostalCode}
            postalCode={postalCode}
          />
          <AppButton onPress={handleSearch} title="Search" />
        </Search>
        <CurrentForecast currentWeather={weather} timezone={weather.timezone} />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
          <FutureForecastContainer>
            {weather.hourly ? (
              weather.hourly.map((hour, index) => {
                if (index !== 0) {
                  return (
                    <DailyForecast key={hour.dt} day={hour} index={index} />
                  );
                }
              })
            ) : (
              <NoWeather>No Weather to show</NoWeather>
            )}
          </FutureForecastContainer>
        </ScrollView>
      </ImageBackground>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: dodgerblue;
`;

const NoWeather = styled.Text`
  text-align: center;
  color: white;
`;

const FutureForecastContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Weather App" component={Feed} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="PremiumFeatures" component={PremiumFeatures} />
    </Drawer.Navigator>
  );
}
const Btn = styled.View`
  margin: 2px;
  width: 50%;
  max-width: 478px;
  margin-top: 18px;
  height: 100%;
  border-radius: 10px;
`;
const Search = styled.View`
  display: flex;
  flex-direction: row;
`;
export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  // ...
  appButtonContainer: {
    marginTop: 15,
    elevation: 1,
    backgroundColor: "#0b60d4",
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 68,
    height: 50,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    marginTop: 10,
  },
});
