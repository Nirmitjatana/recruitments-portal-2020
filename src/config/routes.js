/*
Standard format for a route element:
{
  path: "/",
  component: SomeComponent,
  isPrivate: true
}
 */

import { Home } from '../pages'

export const routes = [
  {
    path: '/',
    component: Home
  }
]
