import React from 'react'
import './App.css'
import LoginRequired from '../Utils/LoginRequired/LoginRequired'
import Landing from './Landing/Landing'
import Profile from './Profile/Profile'
import store from '../../store'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router'
import { withRouter } from 'react-router-dom'
import SignUp from './Auth/SignUp/SignUp'
import SignIn from './Auth/SignIn/SignIn'

function App () {
  return (
    <Provider store={store}>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/signIn' exact component={SignIn} />
        <Route path='/signUp' exact component={SignUp} />
        <LoginRequired>
          <Route path='/profile' exact component={Profile} />
        </LoginRequired>
      </Switch>
    </Provider>
  )
}

export default withRouter(App)
