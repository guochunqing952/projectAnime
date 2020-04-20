import React, { Component } from 'react'
import "./layout.css"

export default class Layout extends Component {
  render() {
    return (
      <div className="wrapper">
        <header className="header">
          {this.props.header}
        </header>
        <div className="kinds">{this.props.category}</div>
        <div className="content">{this.props.children}</div>
      </div>
    )
  }
}
