'use strict';

import React from 'react';
import {
    StyleSheet,
    Dimensions,
    Animated,
    View
} from 'react-native';
const window = Dimensions.get("window");

import BackgroundSearchbar from './BackgroundSearchbar';
// import ForegroundSearchbar from './ForegroundSearchbar';

export class FirefoxNavigationBar extends React.Component {

    render() {
        return (
            <Animated.View style={styles.container}>
                <BackgroundSearchbar />
            </Animated.View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: window.width,
        height: 49,
        top: 0
    }
});

export default FirefoxNavigationBar;
