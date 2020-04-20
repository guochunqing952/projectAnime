import React, { Component } from 'react'
import "./header.css"

export default class Header extends Component {

  render() {
    return (
      <div className='topHeader'>
        <span>アニメの世界にようこそ！</span>
        <div className="btn">
          <button><a href="#/login">Login</a></button>
          <button><a href="#/login">Sign Up</a></button>
        </div>
        <div className="picture"></div>
      </div>
    )
  }
}
