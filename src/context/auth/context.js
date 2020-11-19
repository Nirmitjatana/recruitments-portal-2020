import React, { useReducer } from 'react'
import { initialState, AuthReducer } from './reducer'
import PropTypes from 'proptypes'

const AuthStateContext = React.createContext(undefined, undefined)
const AuthDispatchContext = React.createContext(undefined, undefined)

export function useAuthState () {
  const context = React.useContext(AuthStateContext)
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider')
  }

  return context
}

export function useAuthDispatch () {
  const context = React.useContext(AuthDispatchContext)
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider')
  }

  return context
}

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState)

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.any
}
