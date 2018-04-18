"use strict";

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  Text,
  View,
  TabBarIOS
} from 'react-native';
import FirefoxTabbar from './common/Tabbar';

const window = Dimensions.get("window")

class App extends Component {
  render() {
   return (
    <View style={style.container}>
      <FirefoxTabbar >

      </FirefoxTabbar>
    </View>
   )
  }
}

const style = StyleSheet.create({
  container: {
    width: window.width,
    height: window.height,
    backgroundColor: '#eee'
  }
});

export default App;