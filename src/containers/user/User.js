import React from 'react'
import Cookies from 'js-cookie'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clearUserInfo } from '../../actions/userActions'
import { Redirect } from 'react-router-dom'

import { Result, List, WhiteSpace, Modal } from 'antd-mobile'

class User extends React.Component {
  constructor(props) {
    super(props)

    this.logout = this.logout.bind(this)
  }

  logout() {
    const alert = Modal.alert
    alert('提示信息', '确定要注销吗?', [
      { text: '取消', style: 'default' },
      { text: '注销', onPress: () => {
        Cookies.remove('userid')
        this.props.clearUserInfo()
      } },
    ])
  }

  render() {
    const user = this.props.user
    return user.user ? (
      <div>
        <Result
          img={<img src={require(`../../images/${user.avatar}.png`)} style={{width: 60}} alt="avatar"/>}
          title={user.user}
          message={user.identity === 'boss' && user.company}
        ></Result>
        <List renderHeader={()=>'简介'}>
          <List.Item>
            { user.title }
            { user.desc.split('\n').map(val => (
              <List.Item.Brief key={val}>{ val }</List.Item.Brief>
            )) }
            { user.money && <List.Item.Brief>薪资：{ user.money }</List.Item.Brief> }
          </List.Item>
        </List>
        <WhiteSpace/>
        <List>
          <List.Item onClick={this.logout}>
            退出登录
          </List.Item>
        </List>
      </div>
    ) : <Redirect to={user.redirectTo}/>
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  clearUserInfo: bindActionCreators(clearUserInfo, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)