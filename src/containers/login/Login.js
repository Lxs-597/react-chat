import React, { Component } from 'react'
import Logo from '../../components/logo/Logo'

import { Button, WhiteSpace, WingBlank, List, InputItem, Toast } from 'antd-mobile'

class Login extends Component {
  constructor(props) {
    super(props)

    this.login = this.login.bind(this)
  }

  login() {
    Toast.info('login', 1)
  }

  render() {
    return (
      <div>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem>用户名</InputItem>
            <InputItem type="password">密码</InputItem>
          </List>
          <WhiteSpace/>
          <Button type="primary" onClick={this.login}>登录</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login