import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };

    this.changeInput = this.changeInput.bind(this);
  }

  changeInput(input) {
    this.setState({input});
  }

  render() {
    return (
      <View>
        <Text style={styles.font30}>{this.state.input}</Text>
        <TextInput
          style={styles.input}
          value={this.state.input}
          onChangeText={this.changeInput}>
        </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    width: 300,
    fontSize: 30,
    borderWidth: 1,
    borderColor: "black",
  },
  font30: {
    fontSize: 30,
  },
});
