import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import React, { useState } from "react";
import { Input, Button, Text } from "react-native-elements";
import firestore from "@react-native-firebase/firestore";
import { firebase } from "@react-native-firebase/auth";

const OTPScreen = ({ navigation }) => {

  const phoneNumber = JSON.stringify(navigation.state.params.phone);
  const [error, setError] = useState("");
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');


  // useEffect(() => {
  //   signInWithPhoneNumber();
  // }, []);
  // signInWithPhoneNumber();

  async function signInWithPhoneNumber() {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (e) {
      setError(e.message);
    }
  }

  async function confirmCode() {
    try {
      const response = await confirm.confirm(code);
      if (response) {
        navigation.navigate("Home");
      }
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <>
      <Button title="Send SMS Code" onPress={signInWithPhoneNumber} />
      <Input label="Code" value={code} onChangeText={setCode} />

      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
      <Button title="Confirm" onPress={confirmCode} />
    </>
  );
};


export default OTPScreen;
