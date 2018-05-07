import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../actions/userActions'
import Logo from '../../components/logo/Logo'
import HOCInput from '../HOCImput/HOCInput'

import { Button, WhiteSpace, WingBlank, List, InputItem } from 'antd-mobile'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.login = this.login.bind(this)
  }

  login() {
    this.props.login(this.props.state)
  }

  render() {
    const { redirectTo } = this.props.user
    const { pathname } = this.props.location
    return (
      <div>
        { redirectTo && redirectTo !== pathname && <Redirect to={redirectTo}/> }
        <Logo/>
        <WingBlank>
          <List>
            <InputItem
              onChange={this.props.handleChange.bind(this, 'user')}
            >用户名</InputItem>
            <InputItem
              type="password"
              onChange={this.props.handleChange.bind(this, 'pwd')}
            >密码</InputItem>
          </List>
          <WhiteSpace/>
          <Button type="primary" onClick={this.login}>登录</Button>
        </WingBlank>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(login, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HOCInput(Login))