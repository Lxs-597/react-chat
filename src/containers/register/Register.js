import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../actions/userActions'
import Logo from '../../components/logo/Logo'
import HOCInput from '../HOCImput/HOCInput'

import { Button, WhiteSpace, WingBlank, Radio,List, InputItem } from 'antd-mobile'
const RadioItem =Radio.RadioItem

class Register extends React.Component {
  constructor(props) {
    super(props)

    this.register = this.register.bind(this)
  }

  componentDidMount() {
    this.props.handleChange('identity', 'genius')
  }

  register() {
    this.props.register(this.props.state)
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
              onChange={this.props.handleChange.bind(this, 'user')}
            >用户名</InputItem>
            <InputItem
              type="password"
              onChange={this.props.handleChange.bind(this, 'pwd')}
            >密码</InputItem>
            <InputItem
              type="password"
              onChange={this.props.handleChange.bind(this, 'repeat')}
            >确认密码</InputItem>
          </List>
          <WhiteSpace/>
          { identities.map( item => (
            <RadioItem
              key={item.value}
              checked={this.props.state.identity === item.value}
              onChange={this.props.handleChange.bind(this, 'identity', item.value)}
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
)(HOCInput(Register))