
import React, { useState, useEffect } from 'react';
import { Router } from './src/router';
import { NavigationContainer } from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from './src/config/themeContext';
import theme from './src/config/theme';


const App = () => {

  const [mode, setMode] = useState(false)

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    }
  })

  return (
    <themeContext.Provider
      value = {mode  === true ? theme.dark : theme.light}
    >
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </themeContext.Provider>
  );
};


export default App;