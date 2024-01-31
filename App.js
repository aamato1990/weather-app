import React from 'react';
import { View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CurrentWeather from './src/components/CurrentWeather';
import UpcomingWeather from './src/components/UpcomingWeather'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
      <Stack.Navigator>
      
        <Stack.Screen name="Current Weather" component={CurrentWeather}/>
        <Stack.Screen name="Upcoming Weather" component={UpcomingWeather}/>
      
      </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;