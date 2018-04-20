"use strict";

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image
} from 'react-native';
import FirefoxTabbar from './common/tabbar/FirefoxTabbar';

const window = Dimensions.get("window")

class App extends Component {
  render() {
   return (
    <View style={style.container}>
      <FirefoxTabbar >
        <FirefoxTabbar.Item icon={() => <Image source={{uri: 'nav-back'}} badge={() => <View style={{backgroundColor: 'red'}} />} />}>

        </FirefoxTabbar.Item>
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