import * as React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default function App() {
 
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );

}

const TabNavigator = createBottomTabNavigator({
  FACEBOOK :  fbScreen,
  INSTAGRAM: instaScreen
});

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});


