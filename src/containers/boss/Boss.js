import React from 'react'
import axios from 'axios'

import { WingBlank, WhiteSpace, Card } from 'antd-mobile'

class Boss extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      geniusList: []
    }
  }

  componentDidMount() {
    axios.get('/user/list?identity=genius')
      .then(res => {
        if (res.data.code === 0) {
          this.setState({
            geniusList: res.data.data
          }, () => console.log(this.state.geniusList))
        }
      })
      .catch(e => console.log(e))
  }

  render() {
    return (
      <WingBlank>
        { this.state.geniusList.map(genius => (
          <div key={genius.user}>
            <WhiteSpace/>
            <Card>
              <Card.Header
                title={genius.user}
                thumb={require(`../../components/avatarSelector/images/${genius.avatar}.png`) || null}
                extra={<span>{genius.title}</span>}
              ></Card.Header>
              <Card.Body>{ genius.desc.split('\n').join(',') }</Card.Body>
            </Card>
          </div>
        )) }
      </WingBlank>
    )
  }
}

export default Boss