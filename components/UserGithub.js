import React from "react";
import { Button, Text, View, TextInput, StyleSheet } from "react-native";

export default class UserGithub extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      user: "bruno-negreiros",
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(`https://api.github.com/users/${this.state.user}`)
      .then((response) => response.json())
      .then((json) => this.setState({ data: json }))
      .catch((err) => this.setState({ data: { err } }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.state.data)}</Text>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(user) => {
              this.setState({ user });
            }}
            value={this.state.user}
          ></TextInput>
        </View>
        <View>
          <Button
            onPress={this.fetchData}
            title="Buscar Dados"
            accessibilityLabel="Busque os dados do usuário no GitHub"
          />
        </View>
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
    alignItems: "stretch"
  },
  input: {
    borderWidth: 1
  }
});
