import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import Styles from '../styles/Styles';

export default function(props) {
  return (
    <View style={styles.text}>
      <Text>Hello</Text>
      <Text>{props.text}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'red',
    padding: 10
  }
});

// CLASS COMPONENT
// export default class HelloWorld extends React.Component {
//   render(){
//     return (
//       <View>
//         <Text>Hello</Text>
//         <Text>{this.props.text}</Text>
//       </View>
//     );
//   }
// }