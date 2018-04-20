'use strict';

import { Set } from 'immutable'; // [immutable-js] `https://github.com/facebook/immutable-js`
import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import PropTypes from 'prop-types';
import Tab from './Tab';
import Tabbar from './Tabbar';
import TabbarItem from './TabbarItem';

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
        let icon, badge;
        if (item === null) {
            return;
        }

        icon = item.props.icon();

        if (item.props.badge) {
            badge = item.props.badge();
        } else if (item.props.badgeText) {
            // TODO:
        }

        return (
            <Tab testID={item.props.testID} badge={badge} onPress={item.props.onPress} style={{backgroundColor: 'red'}}>
                {icon}
            </Tab>
        )
    }

    render () {
        let { style, children, ...props } = this.props;

        React.Children.forEach(children, (item, index) => {
            if (item == null) return;

            let sceneKey = this.getSceneKey(item, index);
            if (this.state.renderedSceneKeys.has(sceneKey)) {
                return;
            };

            
        });

        return (
            <View {...props} style={[styles.container, style]}>
                <Tabbar>
                    {React.Children.map(children, this.renderTabbar)}
                </Tabbar>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    }
});

FirefoxTabbar.Item = TabbarItem;

export default FirefoxTabbar;