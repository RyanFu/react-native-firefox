'use strict';

import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Layout from './Layout';

export class Tab extends React.Component {
    static propTypes = {
        testID: PropTypes.string,
        badge: PropTypes.element,
        disabled: PropTypes.bool,
        highlight: PropTypes.bool,
        onPress: PropTypes.func,
    }

    constructor(props: Props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress(evt) {
        if (this.props.onPress) {
            this.props.onPress(evt);
        }
    }

    render() {
        let { badge } = this.props;
        let icon = null;
        if (React.Children.count(this.props.children) > 0) {
            icon = React.Children.only(this.props.children);
        }

        if (badge) {
            badge = React.cloneElement(badge, {
                style: [styles.badge, badge.props.style]
            });
        }

        let style = [styles.container, this.props.style];

        return (
            <TouchableOpacity
                style={style}
                testID={this.props.testID}
                disabled={this.props.disabled}
                onPress={this.handlePress}>
                <View>{icon}{badge}</View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        top: -6,
        right: -10
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Tab;