import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import { setUserInfo } from '../../actions/userActions'

class AuthRoute extends React.Component {
  componentDidMount() {
    const publicPaths = ['/login', '/register']
    const pathname = this.props.location.pathname
    if(publicPaths.indexOf(pathname) > -1) {
      return null
    }
    axios.get('/user/info')
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          this.props.setUserInfo(res.data.data)
        } else {
          this.props.history.replace('/')
        }
      })
  }

  render() {
    return null
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  setUserInfo: bindActionCreators(setUserInfo, dispatch)
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthRoute)
)