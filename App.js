import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import OTPScreen from "./screens/OTPScreen";

import { createAppContainer } from "react-navigation";

const stackNavigator = createStackNavigator({
  Signup: SignupScreen,
  Signin: SigninScreen,
  Home: HomeScreen,
  OTP: OTPScreen,
});

const App = createAppContainer(stackNavigator);

export default App;
