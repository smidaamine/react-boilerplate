import React, { Component, PropTypes } from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import App from '../components/app';
class Root extends Component {

    render() {

        const {store, routes} = this.props;
        return (
            <Provider store={store}>
                <Router history={browserHistory} routes={routes} />

            </Provider>
        );

    }
}





export default Root;