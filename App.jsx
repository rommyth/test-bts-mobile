import {View, Text} from 'react-native';
import React from 'react';
import CoreRoute from './src/routes/Core.route';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <CoreRoute />
      </NavigationContainer>
    </>
  );
};

export default App;
