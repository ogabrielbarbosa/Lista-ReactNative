import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../pages/Home';
import Lists from '../pages/Lists';
import Place from '../pages/Place';
import Profile from '../pages/Profile';
import Prices from '../pages/Prices';
import PricesProducts from '../pages/PricesProducts';
import AboutApp from '../pages/AboutApp';
import PersonData from '../pages/PersonData';
import Settings from '../pages/Settings';

import themes from '../theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackProducts(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
      name="Prices" 
      component={Prices} 
      options={{
        headerShown:false,
        animation: 'slide_from_right'}}
      />

      <Stack.Screen 
      name="PricesProducts" 
      component={PricesProducts} 
      options={{
        headerShown:false,
        animation: 'slide_from_right'}}
      />
    </Stack.Navigator>
  )
}

function StackList(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
      name="Lists" 
      component={Lists} 
      options={{
        headerShown:false,
        animation: 'slide_from_right'}}
      />

      <Stack.Screen 
      name="Place" 
      component={Place} 
      options={{
        headerShown:false,
        animation: 'slide_from_right'}}
      />
    </Stack.Navigator>
  )
}

function StackProfile(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
      name="Profile" 
      component={Profile} 
      options={{
        headerShown:false,
        animation: 'slide_from_right'}}
      />

      <Stack.Screen 
      name="AboutApp" 
      component={AboutApp} 
      options={{
        headerShown:false,
        animation: 'slide_from_right'}}
      />

      <Stack.Screen 
      name="PersonData" 
      component={PersonData} 
      options={{
        headerShown:false,
        animation: 'slide_from_right'}}
      />

      <Stack.Screen 
      name="Settings" 
      component={Settings} 
      options={{
        headerShown:false,
        animation: 'slide_from_right'}}
      />
    </Stack.Navigator>
  )
}

function AppRoutes(){
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme] || theme.dark;
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#6C63FF',
        
        tabBarStyle:{
          backgroundColor: theme.background,
          height: 60,
          borderTopWidth: 0,
          elevation: 0
        }
      }}
    >
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{
        tabBarIcon: ({ color, size }) => {
          return <AntDesign name="home" color={color} size={size} />
        }
      }}
      />

      <Tab.Screen 
      name="Listas"
      component={StackList}
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="list" color={color} size={size} />
        }
      }}
      />

      <Tab.Screen 
      name="Prices" 
      component={StackProducts}
      options={{
        tabBarIcon: ({ color, size }) => {
          return <MaterialCommunityIcons name="sale" color={color} size={size} />
        }
      }}
      />

      <Tab.Screen 
      name="Profile" 
      component={StackProfile}
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Feather name="user" color={color} size={size} />
        }
      }}
      />
    </Tab.Navigator>
  )
}

export default AppRoutes;