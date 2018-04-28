'use strict';

import { Set } from 'immutable'; // [immutable-js] `https://github.com/facebook/immutable-js`
import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView
} from 'react-native';
import PropTypes from 'prop-types';
import Badge from './Badge';
import Tab from './Tab';
import Tabbar from './Tabbar';
import TabbarItem from './TabbarItem';
import Layout from './Layout';

export class FirefoxTabbar extends React.Component {
    constructor(props: Props) {
        super(props);

        this.state = {
            renderedSceneKeys: this.updateRenderedSceneKeys(props.children)
        }

        this.renderTabbar = this.renderTabbar.bind(this);
    }

    updateRenderedSceneKeys(children, oldSceneKeys = Set()): Set {
        let newSceneKeys = Set().asMutable();
        React.Children.forEach(children, (item, index) => {
            if (item == null) return;

            let key = this.getSceneKey(item, index);
            if (oldSceneKeys.has(key) || item.props.enable) {
                newSceneKeys.add(key);
            }
        });

        return newSceneKeys.asImmutable();
    }

    getSceneKey(item, index): string {
        return `scene-${(item.key !== null) ? item.key : index}`;
    }

    renderTabbar(item, index) {
        if (item === null) {
            return;
        }

        let icon, badge;

        icon = item.props.renderIcon();

        if (item.props.renderBadge) {
            badge = item.props.renderBadge();
        } else if (item.props.badgeText) {
            badge = <Badge>{item.props.badgeText}</Badge>;
        }

        return (
            <Tab testID={item.props.testID} badge={badge} onPress={item.props.onPress} style={styles.tab} disabled={item.props.disabled}>
                {icon}
            </Tab>
        )
    }

    render() {
        let { style, children, ...props } = this.props;

        React.Children.forEach(children, (item, index) => {
            if (item == null) return;

            let sceneKey = this.getSceneKey(item, index);
            if (this.state.renderedSceneKeys.has(sceneKey)) {
                return;
            };
        });

        return (
            // <View {...props} style={[styles.container, style]}>
            <Tabbar style={style}>
                {React.Children.map(children, this.renderTabbar)}
            </Tabbar >
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tab: {
        height: Layout.tabBarHeight
    }
});

FirefoxTabbar.Item = TabbarItem;

export default FirefoxTabbar;