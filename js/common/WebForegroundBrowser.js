"use strict";

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image,
    WebView
} from 'react-native';
import ForegroundNavbar from './navigationBar/ForegroundNavbar';
import Icon from 'react-native-vector-icons/Ionicons';
import FirefoxTabbar from './tabbar/FirefoxTabbar';

const window = Dimensions.get("window");
const basePx = 375;

function px2dp(px) {
    return px * window.width / basePx
}

class WebForegroundBrowser extends Component {
    constructor(props: Props) {
        super(props);

        this.state = {

        };

        this.onWebviewScrollEvt = this.onWebviewScrollEvt.bind(this);
    }

    onWebviewScrollEvt(evt) {
        let offsetY = evt.nativeEvent.contentOffset.y;
        console.log(offsetY);
    }


    render() {
        return (
            <View style={styles.container}>
                <ForegroundNavbar style={styles.navigationbar} />
                <WebView source={{ uri: 'https://www.baidu.com/' }} ref={c => (this._web = c)} style={styles.webview} onScroll={this.onWebviewScrollEvt} />
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
    navigationbar: {
        // position: 'absolute',
    },
    webview: {
        backgroundColor: 'green'
    },
    tabbar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WebForegroundBrowser;