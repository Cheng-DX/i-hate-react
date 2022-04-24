import type { Route } from './types'

import Home from '~/pages/home/Home'
import User from '~/pages/user/User'
import NoMatch from '~/components/noMatch'

export const routes: Route[] = [
  {
    path: '/home',
    component: Home,
    meta: {
      title: '🏠 HOME'
    }
  },
  {
    path: '/user',
    component: User,
    meta: {
      title: '🐼 USER'
    }
  },
  {
    path: '*',
    component: NoMatch,
    meta: {
      title: 'NoMatch'
    }
  }
]
