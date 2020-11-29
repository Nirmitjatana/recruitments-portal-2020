/*
Standard format for a route element:
{
  path: "/",
  component: SomeComponent,
  isPrivate: true
}
 */

import { Auth, Home, tech, design, management } from '../pages'

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/auth',
    component: Auth
  },
  {
    path: '/tech',
    component: tech
  },
  {
    path: '/design',
    component: design
  },
  {
    path: '/management',
    component: management
  }
]
