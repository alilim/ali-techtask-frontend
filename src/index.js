import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.css'

import Index from './pages/home/home'

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