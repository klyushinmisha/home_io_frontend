import React from 'react';
import './App.css';
import Landing from './Landing/Landing';
import store from '../../store'
import { Provider } from 'react-redux'
import { Switch, Route, Router } from 'react-router'
import { withRouter } from 'react-router-dom'

function App() {
    return <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/' exact component={Landing}/>
            </Switch>
        </Router>
    </Provider>
}

export default withRouter(App);
