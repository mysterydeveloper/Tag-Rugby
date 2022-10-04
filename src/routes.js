import React from 'react'

const Register = React.lazy(() => import('./views/Register/Register'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/Register', name: 'Register', element: Register },
]

export default routes
