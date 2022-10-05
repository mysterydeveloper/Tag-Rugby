import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Standard',
  },
  {
    component: CNavItem,
    name: 'Register',
    to: '/Register',
  },
  {
    component: CNavItem,
    name: 'Teams',
    to: '/Teams',
  },
  {
    component: CNavTitle,
    name: 'Admin',
  },
  {
    component: CNavItem,
    name: 'Players',
    to: '/Players',
  },
  {
    component: CNavItem,
    name: 'Stats',
    to: '/Stats',
  },
  {
    component: CNavItem,
    name: 'Admin Users',
    to: '/AdminUsers',
  },
  {
    component: CNavItem,
    name: 'Events',
    to: '/Events',
  },
]

export default _nav
