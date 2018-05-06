import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMsgList, sendMessage, receiveMsg } from '../../actions/msgActions'
import { List, InputItem } from 'antd-mobile'


class Chat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      msgs: []
    }

    this.sendMessage = this.sendMessage.bind(this)
  }

  componentDidMount() {
    this.props.getMsgList()
    this.props.receiveMsg()
  }

  sendMessage() {
    const from = this.props.user._id
    const to = this.props.match.params.user
    const msg = this.state.text

    this.props.sendMessage({from, to, msg})
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <div>
          { this.props.msgs.msgs.map(msg => (
            <p key={msg._id}>{msg.content}</p>
          )) }
        </div>
        <div className="stick-footer">
          <List>
            <InputItem
              placeholder="请输入"
              value={this.state.text}
              onChange={(val) => this.setState({ text: val })}
              extra={<span onClick={this.sendMessage}>发送</span>}
            ></InputItem>
          </List>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  chat: state.chat,
  msgs: state.msgs
})

const mapDispatchToProps = dispatch => ({
  getMsgList: bindActionCreators(getMsgList, dispatch),
  sendMessage: bindActionCreators(sendMessage, dispatch),
  receiveMsg: bindActionCreators(receiveMsg, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)