import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import database from '@react-native-firebase/database';

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