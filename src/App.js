import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Logo from './components/logo/Logo'

import { Button, WhiteSpace, WingBlank } from 'antd-mobile'

class App extends Component {
  constructor(props) {
    super(props)

    this.register = this.register.bind(this)
    this.login = this.login.bind(this)
  }

  register() {
    this.props.history.push('/register')
  }

  login() {
    this.props.history.push('/login')
  }

  render() {
    const { redirectTo } = this.props.user
    const { pathname } = this.props.location
    return (
      <div>
        { redirectTo && redirectTo !== pathname && <Redirect to={redirectTo}/> }
        <Logo/>
        <WingBlank>
          <Button type="primary" onClick={this.login}>登录</Button>
          <WhiteSpace/>
          <Button type="primary" onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(
  mapStateToProps
)(App)
