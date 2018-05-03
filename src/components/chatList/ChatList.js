import React from 'react'
import { WingBlank, WhiteSpace, Card } from 'antd-mobile'

class ChatList extends React.Component {
  render() {
    return (
      <WingBlank>
        { this.props.chatList.map(chat => (
          <div key={chat.user}>
            <WhiteSpace/>
            <Card>
              <Card.Header
                title={chat.user}
                thumb={require(`../../images/${chat.avatar}.png`) || null}
                extra={<span>{chat.title}</span>}
              ></Card.Header>
              <Card.Body>
                { chat.identity === 'boss' ? (
                  <div>公司：{chat.company} 薪资：{chat.money}</div>
                ) : null }
                { chat.desc.split('\n').join(',') }
              </Card.Body>
            </Card>
          </div>
        )) }
      </WingBlank>
    )
  }
}

export default ChatList