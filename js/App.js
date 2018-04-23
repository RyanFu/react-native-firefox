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
import Icon from 'react-native-vector-icons/FontAwesome';
import FirefoxTabbar from './common/tabbar/FirefoxTabbar';

const window = Dimensions.get("window");
const basePx = 375;

function px2dp(px) {
  return px * window.width / basePx
}

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FirefoxTabbar style={styles.tabbar}>
          <FirefoxTabbar.Item
            disabled={false}
            badgeText={'0'}
            renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666" />}
            onPress={() => {
              console.log('Click 0');
            }}>
          </FirefoxTabbar.Item>
          <FirefoxTabbar.Item
            disabled={false}
            badgeText={'1'}
            renderIcon={() => <Icon name="user" size={px2dp(22)} color="#666" />}
            onPress={() => {
              console.log('Click 0');
            }}>
          </FirefoxTabbar.Item>
        </FirefoxTabbar >
      </View >
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