import React from 'react'
import { Grid, List } from 'antd-mobile'

class AvatarSelector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      avatar: ''
    }
  }
  render() {
    const avatarList = ['boy', 'girl', 'man', 'woman', 'bull', 'chick', 'crab', 'hedgehog', 'hippopotamus', 'koala', 'lemur', 'pig', 'tiger', 'whale', 'zebra']
    const avatars = avatarList.map(name => ({ 
      icon: require(`./images/${name}.png`),
      text: name
    }))
    const header = this.state.avatar 
                    ? (<div>
                        <span style={{paddingRight: '10px'}}>已选择头像</span>
                        <img src={this.state.avatar} style={{width: 12, height: 12}} alt=""/>
                      </div>)
                    : "选择头像"
    return (
      <div>
        <List renderHeader={()=>header}>
          <Grid
            style={this.state.avatar} 
            data={avatars} 
            columnNum={5}
            onClick={el => {
              this.setState({avatar: el.icon})
              this.props.selectAvatar(el.text)
            }}
          />
        </List>
      </div>
    )
  }
}

export default AvatarSelector 