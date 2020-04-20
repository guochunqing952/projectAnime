import React, { Component } from 'react'
import "./category.css"
import { NavLink } from "react-router-dom"

export default class Category extends Component {

  render() {
    return (
      <div className="kindWrapper">
        <NavLink to='/'>主页</NavLink>
        <NavLink to="/anime">anime</NavLink>
      </div>
    )
  }
}

