import React, { Component } from 'react';
import messaging from '@react-native-firebase/messaging';
import Routes from './src/Routes';
import crashlytics from '@react-native-firebase/crashlytics';

export default class App extends Component {

  componentDidMount = async () => {
    // Required whenever application boots up
    await messaging().registerDeviceForRemoteMessages();
    crashlytics().log('App mounted.');
  };

  render() {
    return (<Routes />);
  }
}
