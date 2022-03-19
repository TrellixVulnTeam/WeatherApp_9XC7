import React, { useEffect, useState } from "react";
import {
  ScrollView,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={style.appButtonContainer}>
    <Text style={style.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

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
export default AppButton;
