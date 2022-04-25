import type { Route } from './types'

import Todo from '~/pages/todo'
import User from '~/pages/user/User'
import NoMatch from '~/components/noMatch'

export const routes: Route[] = [
  {
    path: '/todo',
    component: Todo,
    meta: {
      title: '✅ Todo',
    },
  },
  {
    path: '/user',
    component: User,
    meta: {
      title: '🐼 USER',
    },
  },
  {
    path: '*',
    component: NoMatch,
    meta: {
      title: 'NoMatch',
    },
  },
]
