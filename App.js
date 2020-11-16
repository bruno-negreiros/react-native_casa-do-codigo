import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import HelloWorld from './components/HelloWorld';
import FixedDimensions from './components/FixedDimensions';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <HelloWorld text="World"></HelloWorld>
    //   <FixedDimensions></FixedDimensions>
    //   <StatusBar style="auto" />
    // </View>
    <FixedDimensions></FixedDimensions>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
