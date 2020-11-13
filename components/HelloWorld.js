import React from 'react';
import { Text, View } from 'react-native';

export default function(props) {
  return (
    <View>
      <Text>Hello</Text>
      <Text>{props.text}!</Text>
    </View>
  );
}

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