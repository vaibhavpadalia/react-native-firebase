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

`Note: Push notifications in foreground are not supported in version 6. You will get a callback in onMessage function and you can display an alert on it.`

You can use following libraries for push notification:
* react-native-notifee https://github.com/notifee/react-native-notifee (Paid)
* react-native-notification https://github.com/wix/react-native-notifications (Free)
* react-native-push-notification https://github.com/zo0r/react-native-push-notification (Free)

First start with installing "messaging" module.
```
npm install --save @react-native-firebase/messaging
```

Next import the messaging module into the component.

```
import messaging from '@react-native-firebase/messaging';
```
For iOS add the following line to `App.js` as we need to explicitly register with APNs

```
messaging().registerDeviceForRemoteMessages();
```

These are some functions present in messaging module:
1. deleteToken()
2. getAPNSToken()
3. getinitialNotification()
4. getToken()
5. hasPermission()
6. requestPermission()
7. onTokenRefresh()


## Crashlytics

Install the "crashlytics" firebase module.
```
npm install --save @react-native-firebase/crashlytics
```

For further additional installation check the given links below:

[Android Setup](https://rnfirebase.io/crashlytics/android-setup)

[iOS Setup](https://rnfirebase.io/crashlytics/ios-setup)

`Note: Crashlytics by default does not record crashes in debug mode. To enable it create a firebase.json file in root directory of the project with following configuration:`

```
{
  "react-native": {
    "crashlytics_debug_enabled": true
  }
}
```

After completion of your installation you can force a crash using the following line:
```
crashlytics().crash();
```

You will see a crash record in your firebase crashlytics console.

## Realtime Database

Install the realtime database module.

```
npm install --save @react-native-firebase/database
```

You can create a reference object of the database object
```
database().ref('dbLink')
```

To setup an active listener call the "on" method with an event handler.
```
database()
  .ref('dbLink')
  .on('value', snapshot => {
    console.log('User data: ', snapshot.val());
  });
```

You can perform CRUD operations using this module.

For detailed information on this module: [Details](https://rnfirebase.io/database/usage)

## Analytics (Todo)