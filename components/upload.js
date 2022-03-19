import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePick({ text }) {
  const [image, setImage] = useState(null);
  const [toggle, setToggle] = useState(false);
  const pickImage = async () => {
    setToggle(true);
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [2, 2],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      {!toggle ? (
        <TouchableOpacity>
          <Text onPress={pickImage}>{text}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableHighlight
          onPress={pickImage}
          style={[
            styles.profileImgContainer,
            { borderColor: "gray", borderWidth: 2 },
          ]}
        >
          <ImageBackground
            source={{ uri: image }}
            style={styles.profileImg}
          ></ImageBackground>
        </TouchableHighlight>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  profileImgContainer: {
    marginLeft: 8,
    height: 122,
    width: 122,
    borderRadius: 60,
    borderWidth: 2,
    overflow: "hidden",
  },
  profileImg: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
});
