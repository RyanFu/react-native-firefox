"use strict";

import React from 'react';
import App from './App';

function setup(): ReactClass<{}> {
    console.disableYellowBox = false;

    class Root extends React.Component {
        render() {
            return (
                <App />
            )
        }
    }

    return Root;
}

export default setup;
