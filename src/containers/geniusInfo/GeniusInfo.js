import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import { update } from '../../actions/userActions'
import AvatarSelector from '../../components/avatarSelector/AvatarSelector'
import { NavBar, InputItem, TextareaItem, WhiteSpace, Button, WingBlank } from 'antd-mobile'

class GeniusInfo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      desc: '',
      avatar: '',
    }

    this.selectAvatar = this.selectAvatar.bind(this)
    this.save = this.save.bind(this)
  }

  handleChange(key, value) {
    this.setState({
      [key]: value  
    })
  }

  selectAvatar(avatar) {
    this.setState({ avatar })
  }

  save() {
    this.props.update(this.state)
  }

  render() {
    const path = this.props.location.pathname
    const redirectTo = this.props.user.redirectTo
    return (
      <div>
        {redirectTo && redirectTo !==path  && <Redirect to={this.props.user.redirectTo}/>}
        <NavBar mode="dark">{ this.props.user.user }</NavBar>
        <AvatarSelector  selectAvatar={this.selectAvatar}/>
        <InputItem onChange={this.handleChange.bind(this, 'title')}>求职岗位</InputItem>
        <TextareaItem
          autoHeight
          title="个人简介"
          onChange={this.handleChange.bind(this, 'desc')}>
        </TextareaItem>
        <WhiteSpace/>
        <WingBlank>
          <Button 
            onClick={this.save}
            type="primary"
          >保存</Button>
        </WingBlank>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  update: bindActionCreators(update, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeniusInfo)