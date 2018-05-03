import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../actions/userActions'
import Logo from '../../components/logo/Logo'

import { Button, WhiteSpace, WingBlank, Radio,List, InputItem } from 'antd-mobile'
const RadioItem =Radio.RadioItem

class Register extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      pwd: '',
      repeat: '',
      identity: 'genius'
    }

    this.register = this.register.bind(this)
  }

  register() {
    console.log(this.props)
    this.props.register(this.state)
  }

  handleRadioChange(value) {
    this.setState({
      identity: value,
    })
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    })
  }

  render() {
    const identities = [
      {value: 'genius', label: '牛人'},
      {value: 'boss', label: 'boss'},
    ]
    return (
      <div>
        { this.props.user.redirectTo && <Redirect to={this.props.user.redirectTo}/> }
        <Logo/>
        <WingBlank>
          <List>
            <InputItem
              onChange={this.handleChange.bind(this, 'user')}
            >用户名</InputItem>
            <InputItem
              type="password"
              onChange={this.handleChange.bind(this, 'pwd')}
            >密码</InputItem>
            <InputItem
              type="password"
              onChange={this.handleChange.bind(this, 'repeat')}
            >确认密码</InputItem>
          </List>
          <WhiteSpace/>
          { identities.map( item => (
            <RadioItem
              key={item.value}
              checked={this.state.identity === item.value}
              onChange={this.handleRadioChange.bind(this, item.value)}
            >
              { item.label }
            </RadioItem>
          )) }
          <WhiteSpace/>
          <Button type="primary" onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

const mapStateToprops = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    register: bindActionCreators(register, dispatch)
  }
}


export default connect(
  mapStateToprops,
  mapDispatchToProps
)(Register)