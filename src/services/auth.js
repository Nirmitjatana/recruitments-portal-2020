import axios from 'axios'
import { url } from './base'

export const oauth = async (idToken) => {
  const oauthUrl = url('/api/accounts/oauth/')
  try {
    const oauthResp = await axios.post(oauthUrl, { id_token: idToken })
    return oauthResp.data
  } catch (e) {
    console.log(e)
  }
}
