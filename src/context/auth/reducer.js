const user = window.localStorage.getItem('currentUser')
  ? JSON.parse(window.localStorage.getItem('currentUser')).user
  : ''
const token = window.localStorage.getItem('currentUser')
  ? JSON.parse(window.localStorage.getItem('currentUser')).token
  : ''

export const initialState = {
  user: '' || user,
  token: '' || token,
  loading: false,
  errorMessage: null
}

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'Request':
      return {
        ...initialState,
        loading: true
      }

    case 'Success':
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.token,
        loading: false
      }

    case 'Logout':
      return {
        ...initialState,
        user: '',
        token: ''
      }

    case 'Error':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      }

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
