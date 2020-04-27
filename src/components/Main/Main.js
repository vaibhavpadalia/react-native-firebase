import React, { Component } from "react";
import { View, Text, Platform } from "react-native";

class Main extends Component {
  static navigationOptions = {
    headerTitle: "Main"
  };

  render() {
    return (
      <View>
        <Text>Main component</Text>
      </View>
    );
  }
}

export default Main;