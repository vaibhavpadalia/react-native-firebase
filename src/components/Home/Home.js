import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import messaging from '@react-native-firebase/messaging';
import crashlytics from '@react-native-firebase/crashlytics';

class Home extends Component {
  static navigationOptions = {
    headerTitle: "Home"
  };

  async componentDidMount() {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log(fcmToken);
    } else {
      this.onTokenRefreshListener = messaging().onTokenRefresh(fcmToken => { });
    }
    const enabled = await messaging().hasPermission();
    if (enabled) {
      console.log("enabled");
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
      alert(message.notification.body)
      console.warn("message received", message);
    });
  }

  componentWillUnmount() {
    if (this.onTokenRefreshListener && this.messageListener) {
      this.onTokenRefreshListener();
      this.messageListener();
    }
  }

  navigateTo = () => { };

  generateCrash = () => {
    crashlytics().crash();
  };

  render() {
    return (
      <View>
        <Text>Home component</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.navigateTo()}>
          <Text style={{ margin: 10, borderRadius: 5 }}>{"Here"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.crashButton} onPress={() => this.generateCrash()}>
          <Text style={{ margin: 10, borderRadius: 5 }}>{"Force Crash"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: { backgroundColor: "cyan", alignSelf: "center", marginTop: 10 },
  crashButton: { backgroundColor: "#FFAB99", alignSelf: "center", marginTop: 10 }
});

export default Home;