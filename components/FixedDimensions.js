import React from 'react';
import { View } from 'react-native';

export default function() {
  return (
    <View style={{
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: 'red'
    }}>
      <View style={{ flexShrink: 1, flexBasis: 300, backgroundColor: 'powderblue'}}></View>
      <View style={{ flexShrink: 3, flexBasis: 300, backgroundColor: 'skyblue'}}></View>
      <View style={{ flexShrink: 1, flexBasis: 300, backgroundColor: 'steelblue'}}></View>
    </View>
  );
}