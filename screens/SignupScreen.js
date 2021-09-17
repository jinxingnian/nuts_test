import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import React, { useState } from "react";
import { Input, Button, Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import firestore from "@react-native-firebase/firestore";
import { firebase } from "@react-native-firebase/auth";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");

  const signUp = async () => {
    try {
      const newUserCredential = await auth().createUserWithEmailAndPassword(
        email,
        password
      );
      newUserCredential.user.sendEmailVerification();
      firestore()
        .collection("users")
        .doc(email)
        .set({
          fname: fname,
          lname: lname,
          phone: phone,
        })
        .then(() => {
          console.log("User added!");
        });

      navigation.navigate("Signin");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Input label="First Name" value={fname} onChangeText={setFname} />
      <Input label="Last Name" value={lname} onChangeText={setLname} />
      <Input label="Phone Number" value={phone} onChangeText={setPhone} />
      <Input label="Email" value={email} onChangeText={setEmail} />

      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
      <Button title="Signup" onPress={signUp} />
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Text>Already have an account? Sign in</Text>
      </TouchableOpacity>
    </>
  );
};

export default SignupScreen;
