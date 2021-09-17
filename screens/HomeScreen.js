import auth from "@react-native-firebase/auth";
import React, { useState } from "react";
import { Input, Button, Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const [error, setError] = useState("");

  const signOut = async () => {
    try {
      await auth().signOut();
      navigation.navigate("Home");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <Text>Home Screen</Text>
      <Button title="Sign out" onPress={() => navigation.navigate("Signin")} />
    </>
  );
};

export default HomeScreen;
