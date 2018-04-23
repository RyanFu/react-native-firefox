'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export class TabbarItem extends React.Component {
    static propTypes = {
        renderIcon: PropTypes.func,
        renderBadge: PropTypes.func,
        onPress: PropTypes.func,
        badgeText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        disabled: PropTypes.bool,
        highlight: PropTypes.bool
    }

    render() {
        let child = React.Children.only(this.props.children);
        return React.cloneElement(child, {
            style: [child.props.style, this.props.style]
        });
    }
}

export default TabbarItem;