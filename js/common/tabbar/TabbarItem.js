'use strict';

import React from 'react';
import {
    View
} from 'react-native';
import PropTypes from 'prop-types';

export class TabbarItem extends React.Component {
    static propTypes = {
        icon: PropTypes.func,
        badgeText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        badge: PropTypes.func,
        disable: PropTypes.bool,
        onPress: PropTypes.func
    }

    render() {
        let child = React.Children.only(this.props.children);
        return React.cloneElement(child, {
            style: [child.props.style, this.props.style]
        });
    }
}

export default TabbarItem;