import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getMsgList, sendMessage, receiveMsg } from '../../actions/msgActions'
import { List, InputItem, NavBar, Icon, Grid } from 'antd-mobile'
import { getChatId } from '../../utils/utils'


class Chat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      showEmoji: false
    } 

    this.sendMessage = this.sendMessage.bind(this)
    this.handleShowEmoji = this.handleShowEmoji.bind(this)
  }

  componentDidMount() {
    if (!this.props.msgs.msgs.length) {
      this.props.getMsgList()
      this.props.receiveMsg()
    }
  }

  sendMessage() {
    const from = this.props.user._id
    const to = this.props.match.params.user
    const msg = this.state.text

    this.props.sendMessage({from, to, msg})
    this.setState({ text: '' })
  }

  handleShowEmoji() {
    this.setState({
      showEmoji: !this.state.showEmoji
    })

    this.fixCarousel()
  }

  fixCarousel() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 0)
  }

  render() {
    const userid = this.props.match.params.user
    const users = this.props.msgs.users
    const username = users[userid] && users[userid].name
    const chatid = getChatId(userid, this.props.user._id)
    const chatMsgs = this.props.msgs.msgs.filter(msg => msg.chatid === chatid)
		const emoji = '😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 😭 😓 😪 😴 🙄 🤔 😬 🤐 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 👍 👎 👊 ✊ 🤘 👌 👈 👉 👆 👇 ✋  🖐 🖖 👋  💪 🖕 ✍️  💅 🖖 💄 💋 👄 👅 👂 👃 👁 👀 '
    const emojis = emoji.split(' ')
                    .filter(emoji => emoji)
                    .map(emoji => ({text: emoji}))
    console.log(emojis)
    return (
      <div id="chat-page">
        <NavBar 
          mode="dark" 
          icon={<Icon type="left"/>}
          onLeftClick={() => this.props.history.goBack()}
        >
          { username }
        </NavBar>
        <List>
          { chatMsgs.map(msg => {
            const avatar = require(`../../images/${users[msg.from].avatar}.png`)
            return msg.from === userid ? (
              <List.Item 
                key={msg._id +''+ new Date()}
                thumb={avatar}
              >
                {msg.content}
              </List.Item>
            ) : (
              <List.Item 
                className="chat-me" 
                key={msg._id +''+ new Date()}
                extra={<img src={avatar}/>}
              >
                {msg.content}
              </List.Item>
            )
          }) }
        </List>
        <div className="stick-footer">
          <List>
            <InputItem
              placeholder="请输入"
              value={this.state.text}
              onChange={(val) => this.setState({ text: val })}
              extra={
                <div>
                  <span style={{ marginRight: 15 }} onClick={this.handleShowEmoji}>🙂</span>
                  <span onClick={this.sendMessage}>发送</span>
                </div>
              }
            ></InputItem>
            { this.state.showEmoji 
              ? <Grid 
                  data={emojis}
                  columnNum={9}
                  carouselMaxRow={4}
                  isCarousel={true}
                  onClick={(el) => 
                    this.setState({
                      text: this.state.text + el.text
                    })
                  }
                />
              : null }
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