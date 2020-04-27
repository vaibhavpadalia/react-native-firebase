import React, { Component } from 'react';
import messaging from '@react-native-firebase/messaging';
import Routes from './src/Routes';

export default class App extends Component {

  componentDidMount = async () => {
    // Required whenever application boots up
    await messaging().registerDeviceForRemoteMessages();
  };

  render() {
    return (<Routes />);
  }
}
