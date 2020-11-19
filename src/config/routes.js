/*
Standard format for a route element:
{
  path: "/",
  component: SomeComponent,
  isPrivate: true
}
 */

import { Auth, Home } from '../pages'

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/auth',
    component: Auth
  }
]
