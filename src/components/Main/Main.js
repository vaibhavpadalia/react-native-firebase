import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import firebase from "react-native-firebase";

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