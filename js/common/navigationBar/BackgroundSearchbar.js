'use strict';

import React from 'react';
import {
    StyleSheet,
    Dimensions,
    Animated,
    View
} from 'react-native';

const window = Dimensions.get("window");

export class BackgroundSearchbar extends React.Component {

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
        backgroundColor: 'red'
    }
});

export default BackgroundSearchbar;