import React from 'react';
import Home from './src/Home/index';
import { ThemeProvider } from 'styled-components';
import themes from './src/theme';
import {useColorScheme} from 'react-native';


export default function App() {
  //useColorScheme pode retornar 3 valores: 
  //dark, light ou null
  const deviceTheme = useColorScheme(); 
  const theme = themes[deviceTheme] || theme.dark;
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
