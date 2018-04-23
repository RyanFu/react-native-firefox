'use strict';

import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

import Layout from './Layout';

export class Badge extends React.Component {
    static propTypes = Text.propTypes;
    constructor(props: Props) {
        super(props);

        this.state = {
            badgeSize: null
        }
        this.handleLayout = this.handleLayout.bind(this);
    }

    handleLayout(evt) {
        let { width, height } = evt.nativeEvent.layout;
        let { badgeSize } = this.state;

        if (badgeSize && (badgeSize.width === width) && (badgeSize.height === height)) {
            return;
        }

        this.setState({ badgeSize: { width, height } });

        if (this.props.onLayout) {
            this.props.onLayout(evt);
        }
    }

    render() {
        let { badgeSize } = this.state;
        let style = {};

        if (!badgeSize) {
            style.opacity = 0;
        } else {
            style.width = Math.max(badgeSize.width, badgeSize.height);
        }

        return (
            <Text {...this.props} numberOfLines={1} onLayout={this.handleLayout} style={[styles.container, this.props.style, style]}>
                {this.props.children}
            </Text>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        fontSize: 12,
        color: '#fff',
        backgroundColor: 'rgb(0, 122, 255)',
        lineHeight: 15,
        textAlign: 'center',
        borderWidth: 1 + Layout.pixel,
        borderColor: '#fefefe',
        borderRadius: 17 / 2,
        overflow: 'hidden',
    },
});

export default Badge;