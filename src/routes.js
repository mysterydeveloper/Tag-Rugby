import React from 'react'

const Register = React.lazy(() => import('./views/Register/Register'))
const Events = React.lazy(() => import('./views/Events/Events'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/Register', name: 'Register', element: Register },
  { path: '/Events', name: 'Events', element: Events, exact: true },
]

export default routes
