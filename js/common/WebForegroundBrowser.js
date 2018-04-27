"use strict";

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image,
    WebView,
    Animated,
    LayoutAnimation
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
            isDragging: false,
            dragStartPosition: 0,
            scrollDistance: 64,
            percentHidden: 0,
            navigationbarTransform: 0,
            tabbarTransform: 0
        };

        this.onScrollEvt = this.onScrollEvt.bind(this);
        this.onWillBeginDraggingEvt = this.onWillBeginDraggingEvt.bind(this);
        this.onWillEndDraggingEvt = this.onWillEndDraggingEvt.bind(this);
    }

    // Tip: Added `onScroll`.. event for WebView.
    // For more information: https://github.com/facebook/react-native/pull/18727

    onWillBeginDraggingEvt(evt) {
        console.log('⬇️ 开始');

        let position = evt.nativeEvent.contentOffset.y + evt.nativeEvent.contentInset.top;
        this.setState({ dragStartPosition: Math.max(position, 0), isDragging: true });
    }

    onScrollEvt(evt) {
        console.log('🔴 滚动中...');

        let position = evt.nativeEvent.contentOffset.y + evt.nativeEvent.contentInset.top;
        if (position <= 0.0) {
            this.setPercentHiddenInteractive(0.0, false);
        } else if (this.state.isDragging) {
            if (position < this.state.scrollDistance) {
                let newPercentHidden = position / this.state.scrollDistance;
                this.setPercentHiddenInteractive(newPercentHidden, true);
                return;
            }
            if (this.state.percentHidden < 1.0) {
                let diff = position - this.state.dragStartPosition;
                this.setPercentHiddenInteractive(diff / this.state.scrollDistance, true);
                if (diff < 0.0) {
                    this.state.dragStartPosition = position;
                }
            }
        }
    }

    onWillEndDraggingEvt(evt) {
        console.log('⬆️ 结束');

        let position = evt.nativeEvent.targetContentOffset.y + evt.nativeEvent.contentInset.top;
        let vilocity = evt.nativeEvent.velocity;
        this.setState({ isDragging: false });

        let shouldHide = true;
        if (vilocity < 0.0 || (vilocity == 0.0 && this.state.percentHidden == 0.0) || (position < this.state.scrollDistance)) {
            shouldHide = false;
        }
        this.setPercentHiddenInteractive(shouldHide ? 1.0 : 0.0, false);
    }

    setPercentHiddenInteractive(percent, interactive) {
        if (percent < 0.0) percent = 0.0;
        if (percent > 1.0) percent = 1.0;

        if (percent == this.state.percentHidden) return;

        this.setState({ percentHidden: percent });

        /// do something ..
        this.update();
    }

    update(interactive) {
        let percentHidden = this.state.percentHidden;
        this.setState({ navigationbarTransform: -percentHidden * 64.0 })

        // Animated.timing(this.state.navigationbarTransform, {
        //     toValue: -percentHidden * 64.0
        // }).start();

        LayoutAnimation.configureNext({
            duration: 300, //持续时间
            create: { // 视图创建
                type: LayoutAnimation.Types.linear,
                // property: LayoutAnimation.Properties.scaleXY,// opacity、scaleXY
            },
            update: { // 视图更新
                type: LayoutAnimation.Types.linear,
            },
        });

        if (!interactive) { }
    }

    render() {
        return (
            <View style={styles.container}>
                <ForegroundNavbar style={[styles.navigationbar, { top: this.state.navigationbarTransform }]} />
                <WebView source={{ uri: 'https://www.baidu.com/' }} ref={c => (this._web = c)} style={[styles.webview, { top: this.state.navigationbarTransform }]} onScroll={this.onScrollEvt} onWillBeginDragging={this.onWillBeginDraggingEvt} onWillEndDragging={this.onWillEndDraggingEvt} />
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
        //position: 'absolute',
        // top: -100,
        backgroundColor: 'green'
    },
    webview: {

    },
    tabbar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WebForegroundBrowser;