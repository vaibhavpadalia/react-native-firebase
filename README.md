# React Native Firebase (v6) 🔥

<img src="./src/assets/images/firebase.png" />

In this version we have separate packages for every different module unlike versions < 6.0.

## Installation

Install the firebase app module which is the base requirement for adding any further firebase modules.
```
npm install --save @react-native-firebase/app
```

Download the `google-services.json` file and place it in the following location of your project `/android/app/google-services.json`.

For android add google-services plugin as a dependency inside of the `/android/build.gradle file`:
```
buildscript {
  dependencies {
    // ... other dependencies
    classpath 'com.google.gms:google-services:4.2.0'
  }
}
```

Add the following plugin to the very bottom of the `/android/app/build.gradle` file:
```
apply plugin: 'com.google.gms.google-services'
```

## Push Notifications

```Note: Push notifications in foreground are not supported in version 6```

You can use following libraries for push notification:
* react-native-notifee https://github.com/notifee/react-native-notifee (Paid)
* react-native-notification https://github.com/wix/react-native-notifications (Free)
* react-native-push-notification https://github.com/zo0r/react-native-push-notification (Free)