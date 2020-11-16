import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// export default props =>
//   <View>
//     {
//       props.number % 2 === 0
//       ? <Text style={styles.text}>O número é par!</Text>
//       : <Text style={styles.text}>O número é ímpar!</Text>
//     }
//   </View>
  
// export default function(props) {
//   return(
//     <View>
//       {
//         props.number % 2 === 0
//         ? <Text style={styles.text}>O número é par!</Text>
//         : <Text style={styles.text}>O número é ímpar!</Text>
//       }
//     </View>
//   );
// };

export default props =>
  <View style={styles.container}>
    {validaParOuImpar(props.number)}
  </View>

function validaParOuImpar(number) {
  return number % 2 === 0
    ? <Text style={styles.text}>O número é par!</Text>
    : <Text style={styles.text}>O número é ímpar!</Text>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});