import { authSvc } from '../../services'

export const oauth = async (idToken, dispatch) => {
  try {
    dispatch({
      type: 'Request'
    })
    const oauthResponse = await authSvc.oauth(idToken)
    const token = oauthResponse.token.access
    dispatch({
      type: 'Success',
      payload: {
        token
      }
    })
  } catch (e) {
    dispatch({
      type: 'Error',
      error: e
    })
  }
}
