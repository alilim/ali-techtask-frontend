import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Index from './pages/index'

export const Root = () => { 
  return  (
    <BrowserRouter basename={'/'} >
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Index}/>
      </Switch>
    </BrowserRouter>
  )
} 

ReactDOM.render(<Root />, document.getElementById('root'))