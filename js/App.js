"use strict";

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  Text,
  View,
  SafeAreaView,
  Image
} from 'react-native';
import FirefoxNavigationBar from './common/navigationBar/FirefoxNavigationBar';
import Icon from 'react-native-vector-icons/Ionicons';
import FirefoxTabbar from './common/tabbar/FirefoxTabbar';

const window = Dimensions.get("window");
const basePx = 375;

function px2dp(px) {
  return px * window.width / basePx
}

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FirefoxNavigationBar >
        </FirefoxNavigationBar>
        <FirefoxTabbar style={styles.tabbar}>
          <FirefoxTabbar.Item disabled={false} renderIcon={() => <Icon name="md-arrow-round-back" size={px2dp(22)} color="#111" />} onPress={() => {
              console.log('Click 0');
            }}>
          </FirefoxTabbar.Item>
          <FirefoxTabbar.Item disabled={false} renderIcon={() => <Icon name="md-arrow-round-forward" size={px2dp(22)} color="#111" />} onPress={() => {
              console.log('Click 1');
            }}>
          </FirefoxTabbar.Item>
          <FirefoxTabbar.Item disabled={false} renderIcon={() => <Icon name="md-refresh" size={px2dp(22)} color="#111" />} onPress={() => {
              console.log('Click 2');
            }}>
          </FirefoxTabbar.Item>
          <FirefoxTabbar.Item disabled={false} renderIcon={() => <Icon name="md-square-outline" size={px2dp(22)} color="#111" />} onPress={() => {
              console.log('Click 3');
            }}>
          </FirefoxTabbar.Item>
          <FirefoxTabbar.Item disabled={false} renderIcon={() => <Icon name="md-menu" size={px2dp(22)} color="#111" />} onPress={() => {
              console.log('Click 4');
            }}>
          </FirefoxTabbar.Item>
        </FirefoxTabbar >
      </SafeAreaView >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: window.width,
    height: window.height,
    backgroundColor: '#F5FCFF'
  },
  tabbar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;