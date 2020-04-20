import React, { Component } from "react";
import { View, Text, Platform, Button } from "react-native";
import firebase from "react-native-firebase";
import messaging from '@react-native-firebase/messaging';

class Home extends Component {
  static navigationOptions = {
    headerTitle: "Home"
  };

  async componentDidMount() {
    // const channel = new firebase.notifications.Android.Channel(
    //   "channelId",
    //   "Channel Name",
    //   firebase.notifications.Android.Importance.Max
    // ).setDescription("A natural description of the channel");
    // firebase.notifications().android.createChannel(channel);

    // this.unsubscribeFromNotificationListener = firebase.notifications().onNotification(notification => {
    //   if (Platform.OS === "android") {
    //     const localNotification = new firebase.notifications.Notification({
    //       sound: "default",
    //       show_in_foreground: true
    //     })
    //       .setNotificationId(notification.notificationId)
    //       .setTitle(notification.title)
    //       .setSubtitle(notification.subtitle)
    //       .setBody(notification.body)
    //       .setData(notification.data)
    //       .android.setChannelId("channelId") // e.g. the id you chose above
    //       .android.setColor("#000000") // you can set a color here
    //       .android.setPriority(firebase.notifications.Android.Priority.High);

    //     firebase
    //       .notifications()
    //       .displayNotification(localNotification)
    //       .catch(err => console.error(err));
    //   }
    // });

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
    this.unsubscribeFromNotificationListener();
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