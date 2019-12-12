import React from 'react'
import './App.css'
import Landing from './Landing/Landing'
import Profile from './Profile/Profile'
import store from '../../store'
import { Provider } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router'
import { withRouter, Redirect } from 'react-router-dom'
import SignUp from './Auth/SignUp/SignUp'
import SignIn from './Auth/SignIn/SignIn'

function App () {
  const token = store.getState().userReducer.token
  const history = useHistory()

  let redirectView = null
  if (token === null) {
    if (history.location.pathname === '/profile') {
      redirectView = <Redirect to='/signIn' />
    }
  } else {
    if (!history.location.pathname.startsWith('/profile')) {
      console.log(history.location.pathname, 'HERE')
      redirectView = <Redirect to='/profile' />
    }
  }

  return (
    <Provider store={store}>
      <Switch>
        {redirectView}
        <Route path='/' exact component={Landing} />
        <Route path='/profile' component={Profile} />
        <Route path='/signIn' exact component={SignIn} />
        <Route path='/signUp' exact component={SignUp} />
        <Redirect to='/' />
      </Switch>
    </Provider>
  )
}

export default withRouter(App)
