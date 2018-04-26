'use strict';

import React from 'react';
import {
    StyleSheet,
    Dimensions,
    Animated,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const window = Dimensions.get("window");
const basePx = 375;

function px2dp(px) {
    return px * window.width / basePx
}

export class ForegroundNavbar extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.button} activeOpacity={1}>
                    <Icon name="lock" size={px2dp(22)} color="green" style={styles.icon} />
                    <Text style={styles.text}>www.xxxxx</Text>
                    <TouchableOpacity><Icon name="book" size={px2dp(22)} color="#111" style={styles.icon} /></TouchableOpacity>
                    <View style={styles.seperator} />
                    <TouchableOpacity><Icon name="ellipsis-h" size={px2dp(22)} color="#111" style={styles.icon} /></TouchableOpacity>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        width: window.width,
        // height: 64,
        backgroundColor: 'white'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        width: window.width - 20,
        margin: 10,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 2.5
        // backgroundColor: 'orange'
    },
    icon: {
        margin: 10
    },
    text: {
        width: window.width - 140
    },
    seperator: {
        width: 0.5,
        height: 30,
        backgroundColor: '#ccc'
    }
});

export default ForegroundNavbar;