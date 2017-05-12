import React, { Component } from 'react';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={App} />
            </BrowserRouter>
        );
    }
}

export default AppRouter;