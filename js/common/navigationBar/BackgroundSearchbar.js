'use strict';

import React from 'react';
import {
    StyleSheet,
    Dimensions,
    Animated,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const window = Dimensions.get("window");
const basePx = 375;

function px2dp(px) {
    return px * window.width / basePx
}

export class BackgroundSearchbar extends React.Component {

    render() {
        return (
            <Animated.View style={styles.container}>
                <TouchableOpacity>
                    <Icon name="md-arrow-round-back" size={px2dp(22)} color="#111" />
                    <Text>www.xxxxx</Text>
                    <Icon name="md-arrow-round-back" size={px2dp(22)} color="#111" />
                </TouchableOpacity>
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