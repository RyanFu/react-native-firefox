'use strict';

import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

export class Tab extends React.Component {
    static propTypes = {
        testID: PropTypes.string,
        badge: PropTypes.element,
        onPress: PropTypes.bool
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

        debugger

        return (
            <TouchableOpacity testID={this.props.testID} onPress={this.handlePress} style={style}>
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

    }
});

export default Tab;