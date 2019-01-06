import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "react-native-firebase";

class Home extends Component {
  static navigationOptions = {
    headerTitle: "Home"
  };

  async componentDidMount() {
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      console.warn(fcmToken);
    } else {
      this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(fcmToken => {});
    }
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      console.warn("enabled")
    } else {
      try {
        await firebase.messaging().requestPermission();
      } catch (error) {
        // User has rejected permissions
      }
    }

  }

  componentWillUnmount() {
    this.onTokenRefreshListener();
  }

  render() {
    return (
      <View>
        <Text>Home component</Text>
      </View>
    );
  }
}

export default Home;
