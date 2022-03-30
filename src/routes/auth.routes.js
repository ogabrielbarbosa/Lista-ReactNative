import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../pages/Login';
import Register from '../pages/Register';

const Stack = createNativeStackNavigator();

function AuthRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false, animation: 'slide_from_right' }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false, animation: 'slide_from_right' }} />
    </Stack.Navigator>
  )
}

export default AuthRoutes;