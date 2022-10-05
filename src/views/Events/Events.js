import React from 'react'
import { CButton } from '@coreui/react'
const makeid = () => {
  var text = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < 20; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  console.log(window.location.origin + '/app?#/Register/' + text)
  return window.location.origin + '/app?#/Register/' + text
}
const Events = (props) => {
  return <div> {makeid()} </div>
}

export default Events
