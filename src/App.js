import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { routes } from './config/routes'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => <Route exact key={route.path} path={route.path} component={route.component} />)}
      </Switch>
    </BrowserRouter>
  )
}

export default App
