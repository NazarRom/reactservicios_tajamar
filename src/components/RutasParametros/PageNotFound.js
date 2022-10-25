import React, { Component } from 'react'
import miata from '../../assets/images/miata.jpg'
export default class PageNotFound extends Component {
  render() {
    return (
      <div>
        <h1>Not Found 404</h1>
        <img src={miata}/>
        </div>
    )
  }
}
