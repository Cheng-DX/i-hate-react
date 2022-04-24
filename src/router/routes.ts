import type { Route } from './types'
import Clock1 from '../components/clock/Clock'
import Clock2 from '../components/clock'

export const routes: Route[] = [
  {
    path: '/clock1',
    component: Clock1,
    meta: {
      title: 'Clock1'
    }
  },
  {
    path: '/clock2',
    component: Clock2,
    meta: {
      title: 'Clock2'
    }
  }
]
