// import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'

import GlobalState from './context/global/globalState'

// import { FirtsScreen } from './screens/firtsScreen'
// import { SecondScreen } from './screens/secondScreen'

import AddMenu from './component/addMenu'
import Items from './component/items'

const App = () => <GlobalState>
  <View style={styles.container}>
    <AddMenu />
    <Items />
  </View>
</GlobalState>

// const Stack = createStackNavigator()

// const App = () => <NavigationContainer>
//   <Stack.Navigator initialRouteName="home">
//     <Stack.Screen name="home" component={FirtsScreen} />
//     <Stack.Screen name="second" component={SecondScreen} />
//   </Stack.Navigator>
// </NavigationContainer>

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
