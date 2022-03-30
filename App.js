import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'

import { ThemeProvider } from 'styled-components';
import themes from './src/theme';
import AuthProvider from './src/contexts/auth';
console.disableYellowBox = true;
export default function App() {
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme] || theme.dark

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor={theme.background} barStyle={theme.statusbar} translucent={false} />
        <ThemeProvider theme={theme}> 
          <Routes/>
        </ThemeProvider>
      </AuthProvider> 
    </NavigationContainer>
  );
}