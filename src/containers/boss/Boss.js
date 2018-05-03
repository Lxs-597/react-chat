import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getChatList } from '../../actions/chatActions'
import ChatList from '../../components/chatList/ChatList'

class Boss extends React.Component {

  componentDidMount() {
    this.props.getChatList('genius')
  }

  render() {
    return (
      <ChatList chatList={this.props.chat.chatList}/>
    )
  }
}

const mapStateToprops = state => ({
  chat: state.chat
})

const mapDispatchToProps = dispatch => ({
  getChatList: bindActionCreators(getChatList, dispatch)
})

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(Boss)