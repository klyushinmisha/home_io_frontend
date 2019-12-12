import React from 'react'
import CodeEditor from './CodeEditor/CodeEditor'
import Navbar from '../../Utils/Navbar/Navbar'
import ScriptList from './ScriptList/ScriptList'
import { Switch, Route } from 'react-router'
import ScriptData from './ScriptData/ScriptData'

export default function Profile () {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-4 pt-4'>
            <ScriptList />
          </div>
          <div className='col-8'>
            <Switch>
              <Route path='/profile/scripts/:scriptId' component={ScriptData} />
              <Route path='/profile' exact component={CodeEditor} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}
