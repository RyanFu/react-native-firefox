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
import WebForegroundBrowser from './common/WebForegroundBrowser';

const window = Dimensions.get("window");
const basePx = 375;

function px2dp(px) {
  return px * window.width / basePx
}

class App extends Component {
  render() {
    return (
      <WebForegroundBrowser />
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
});

export default App;