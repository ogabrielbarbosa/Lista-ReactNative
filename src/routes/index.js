import React, { useContext } from 'react';
import {View, ActivityIndicator, useColorScheme} from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { AuthContext } from '../contexts/auth'

import themes from '../theme';

function Routes(){
  const { signed, loading } = useContext(AuthContext);
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme] || theme.dark
  if(loading){
    return(
      <View 
      style={{
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: theme.background
      }}>
        <ActivityIndicator size={50} color="#6C63FF" />
      </View>
    )
  }
  
  return(
    signed ? <AppRoutes/> : <AuthRoutes/>
  )
}

export default Routes;