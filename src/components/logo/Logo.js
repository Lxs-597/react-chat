import React, { Component } from 'react'
import LogoImg from './Logo.png'
import './logo.css'

class Logo extends Component {
  render() {
    return (
      <div className="logo-wrapper">
        <img src={LogoImg} alt="logo"/>
      </div>
    )
  }
}

export default Logo