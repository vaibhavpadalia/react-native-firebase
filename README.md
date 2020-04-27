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
