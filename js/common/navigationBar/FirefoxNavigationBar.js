'use strict';

import React from 'react';
import {
    StyleSheet,
    Dimensions,
    Animated,
    View
} from 'react-native';
const window = Dimensions.get("window");
// import BackgroundSearchbar from './BackgroundSearchbar';
// import ForegroundSearchbar from './ForegroundSearchbar';

export class FirefoxNavigationBar extends React.Component {

    render() {
        return (
            <Animated.View style={styles.container}>

            </Animated.View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: window.width,
        height: 44,
        top: 0,
        backgroundColor: 'green'
    }
});

export default FirefoxNavigationBar;
