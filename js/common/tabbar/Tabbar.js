"use strict";

import React from 'react';
import {
    Animated,
    StyleSheet,
    Dimensions,
    View
} from 'react-native';

const window = Dimensions.get("window");

export class Tabbar extends React.Component {
    static propTypes = {
        ...Animated.View.propTypes
    }

    render() {
        return (
            <Animated.View {...this.props} style={[style.tabbar, this.props.style]}>
                {this.props.children}
            </Animated.View>
        )
    }
}

const style = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        bottom: 0,
        width: window.width,
        height: 49,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efefef',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.2,
        shadowRadius: 5
    }
});

export default Tabbar;

// more: `https://www.jianshu.com/p/7da2d6393a9f`