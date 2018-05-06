import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getChatList } from '../../actions/chatActions'
import ChatList from '../../components/chatList/ChatList'

class Genius extends React.Component {
  constructor(props) {
    super(props)

    this.handleCardClick = this.handleCardClick.bind(this)
  }

  componentDidMount() {
    this.props.getChatList('boss')
  }

  handleCardClick(chat) {
    this.props.history.push(`/chat/${chat._id}`)
  }

  render() {
    return (
      <ChatList handleCardClick={this.handleCardClick} chatList={this.props.chat.chatList}/>
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
)(Genius)