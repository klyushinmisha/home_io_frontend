import React from 'react';
import './App.css';
import Landing from './Landing/Landing';
import store from '../../store'
import { Provider } from 'react-redux'

function App() {
    return <Provider store={store}>
        <Landing/>
    </Provider>
}

export default withRouter(App);
