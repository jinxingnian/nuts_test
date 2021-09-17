import auth from "@react-native-firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { Input, Button, Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signIn = async () => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate("Home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Input label="Email" value={email} onChangeText={setEmail} />

      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
      <Button title="Signin" onPress={signIn} />
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </>
  );
};

export default SigninScreen;
