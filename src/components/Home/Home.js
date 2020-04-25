import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import messaging from '@react-native-firebase/messaging';

class Home extends Component {
  static navigationOptions = {
    headerTitle: "Home"
  };

  async componentDidMount() {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.warn(fcmToken);
    } else {
      this.onTokenRefreshListener = messaging().onTokenRefresh(fcmToken => { });
    }
    const enabled = await messaging().hasPermission();
    if (enabled) {
      console.warn("enabled");
    } else {
      try {
        await messaging().requestPermission();
      } catch (error) {
        // User has rejected permissions
      }
    }

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    this.messageListener = messaging().onMessage(async message => {
      console.warn("message received", message);
    });
  }

  componentWillUnmount() {
    this.onTokenRefreshListener();
    this.messageListener();
  }

  render() {
    return (
      <View>
        <Text>Home component</Text>
        <Button onPress={() => this.props.navigation.navigate("Main")} title={"Here"} />
      </View>
    );
  }
}

export default Home;