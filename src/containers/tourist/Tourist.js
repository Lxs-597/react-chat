import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMsgList, sendMessage, receiveMsg } from '../../actions/msgActions'
import { Switch, Route } from 'react-router-dom'

import Tabs from '../../components/tabs/Tabs'
import Boss from '../boss/Boss'
import Genius from '../genius/Genius'
import User from '../user/User'
import { NavBar } from 'antd-mobile'

function Message(){
  return (
    <h2>Message</h2>
  )
}

class Tourist extends React.Component {
  constructor(props) {
    super(props)

    this.handleTabClick = this.handleTabClick.bind(this)
  }

  componentDidMount() {
    if (!this.props.msgs.msgs.length) {
      this.props.getMsgList()
      this.props.receiveMsg()
    }
  }

  handleTabClick(path) {
    this.props.history.push(path)
  }

  render() {
    const { identity } = this.props.user
    const { pathname } = this.props.location
    const navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: 'boss',
        title: '牛人列表',
        component: Boss,
        hide: identity === 'genius'
      },
      {
        path: '/genius',
        text: 'BOSS',
        icon: 'job',
        title: 'BOSS列表',
        component: Genius,
        hide: identity === 'boss'
      },
      {
        path: '/message',
        text: '消息',
        icon: 'msg',
        title: '消息列表',
        component: Message,
      },
      {
        path: '/user',
        text: '我',
        icon: 'user',
        title: '个人中心',
        component: User,
      },
    ]
    const title = navList.find(item => item.path === pathname).title
    return (
      <div>
        <NavBar className="fixd-header" mode="dark">{ title }</NavBar>
        <div style={{marginTop: 45}}>
          <Switch>
            { navList.map(r => (
              <Route key={r.path} path={r.path} component={r.component}/>
            )) }
          </Switch>
        </div>
        <Tabs unread={this.props.msgs.unread} data={navList} pathname={pathname} handleTabClick={this.handleTabClick}/>
      </div>
    )
  }
}

const mapStateToprops = state => ({
  user: state.user,
  msgs: state.msgs
})

const mapDispatchToProps = dispatch => ({
  getMsgList: bindActionCreators(getMsgList, dispatch),
  receiveMsg: bindActionCreators(receiveMsg, dispatch),
})

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(Tourist)