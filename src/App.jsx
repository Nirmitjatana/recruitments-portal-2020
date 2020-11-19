import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { routes } from './config'
import { AuthProvider } from './context/auth/context'

function App () {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          {routes.map(route => <Route exact key={route.path} path={route.path} component={route.component} />)}
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
