import React from 'react'
import "./login.css"

export default function Welcome() {
  return (
    <div className="welcome">
      <div className="loginTitle">欢迎来到大宝の动漫搜索</div>
      <div>
        <span>Username</span>
        <input />
      </div>

      <div>
        <span>Password</span>
        <input />
      </div>

      <a href="#/"><button className="btn1">Login</button></a>
      <br></br>
      <a href="#/"><button className="btn2">Sign Up</button></a>


    </div>
  )
}
