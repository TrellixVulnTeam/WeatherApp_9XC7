import React from "react";
import {
  postcodeValidator,
  postcodeValidatorExistsForCountry,
} from "postcode-validator";
import Upload from "./upload";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const Feed = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.main}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Postal Code"
        />
      </View>
      <View style={styles.button}>
        {postcodeValidator(text, "CA") ? <Button title="Search" /> : null}
      </View>
    </View>
  );
};
function Profile() {
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  return (
    <View>
      <View
        style={{
          marginTop: 50,
          flex: 1,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            // borderRadius: 100 / 2,
            borderWidth: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Upload />
        </View>

        <b style={{ marginTop: 30 }}>
          First Name :
          <TextInput
            style={styles.input}
            onChangeText={setFname}
            value={fname}
            placeholder="First Name"
          />
        </b>

        <b style={{ marginTop: 30 }}>
          Last Name :
          <TextInput
            style={styles.input}
            onChangeText={setLname}
            value={lname}
            placeholder="Last Name"
          />
        </b>
        <View style={{ marginTop: 100 }}>
          <Button
            style={{ marginTop: 2000 }}
            title="Save"
            // onPress={() => Alert.alert("Simple Button pressed")}
          />
        </View>
      </View>
    </View>
  );
}
function PremiumFeatures() {
  const [cardNumber, setCardNumber] = React.useState("");
  const [expire, setExpire] = React.useState("");
  return (
    <View>
      <View
        style={{
          marginTop: 50,
          flex: 1,
          alignItems: "center",
        }}
      >
        <b style={{ marginTop: 30 }}>Credit Card :</b>
        <TextInput
          style={styles.input}
          onChangeText={setCardNumber}
          value={cardNumber}
          placeholder="Credit Card number"
        />

        <b style={{ marginTop: 30 }}>Expire :</b>
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
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Weather App" component={Feed} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Premium features" component={PremiumFeatures} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

// style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
