import React from 'react'
import './App.css'
import Landing from './Landing/Landing'
import store from '../../store'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router'
import { withRouter } from 'react-router-dom'

function App () {
  return (
    <Provider store={store}>
      <Switch>
        <Route path='/' exact component={Landing} />
      </Switch>
    </Provider>
  )
}

export default withRouter(App)
