import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import styled from "styled-components/native";
import Upload from "./upload";
import AppButton from "./Button";
import bgImg from "./4.png";
export default function Profile() {
  const [fname, setFname] = React.useState("Surya");
  const [lname, setLname] = React.useState("Sama");
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
          <ProfilePic>
            <Pic>
              <Upload text="Upload" />
            </Pic>
          </ProfilePic>

          <Text>First Name</Text>
          <Name
            onChangeText={setFname}
            value={fname}
            placeholder="First Name"
          ></Name>
          <Name
            onChangeText={setLname}
            value={lname}
            placeholder="Last Name"
          ></Name>

          <AppButton title="Save" />
        </View>
      </ImageBackground>
    </Container>
  );
}

const Name = styled.TextInput`
  margin: 20px;
  background-Color: white
  height: 50px
  width: 200px
  border-Radius: 20px
  padding: 12px

`;
const ProfilePic = styled.View`
padding: 20px
margin: 20px
height: 122px
width: 122px
background-Color: white
border-Radius: 100px
border: 2px
border-Color: gray
`;

const Container = styled.View`
  flex: 1;
  background-color: dodgerblue;
`;

const Pic = styled.View`
  margin-top: -24px;
  margin-left: -29px;
`;
