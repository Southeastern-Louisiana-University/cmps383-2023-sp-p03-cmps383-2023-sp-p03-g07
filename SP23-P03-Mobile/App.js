import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header : ()=>null }}>
      <Stack.Screen name="Login" component={LoginPage}/>
      <Stack.Screen name="SignUp" component={SignUpPage}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;