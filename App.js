//import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';

//screens
import SplashScreen from './components/screens/SplashScreen';
import WelcomeScreen from './components/screens/WelcomeScreen';
import ForgetPassword from './components/screens/ForgetPassword';
import SignIn from './components/screens/SignIn';
import SignUp from './components/screens/SignUp';
import ForgetPasswordSuccessFul from './components/screens/ForgetPasswordSuccessFul';
import DashBoard from './components/screens/DashBoard';
import VerificationOTPScreen from './components/screens/VerificationOTPScreen';
import AboutSociety from './components/screens/AboutSociety';
// navigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';




export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="VerificationOTPScreen" component={VerificationOTPScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUp} />
        <Stack.Screen name="ForgetScreen" component={ForgetPassword} />
        <Stack.Screen name="AboutSociety" component={AboutSociety} />
        <Stack.Screen name="ForgetPasswordSuccessFul" component={ForgetPasswordSuccessFul} />
        <Stack.Screen name="Dashboard" component={DashBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

