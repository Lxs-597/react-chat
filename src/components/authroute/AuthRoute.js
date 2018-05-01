import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class AuthRoute extends React.Component {
  componentDidMount() {
    const publicPaths = ['/login', '/regist']
    const pathname = this.props.location.pathname
    if(publicPaths.indexOf(pathname) > -1) {
      return null
    }
    axios.get('/user/info')
      .then(res => {
        if (res.status === 200) {
          console.log(res)
          if (res.data.code === 0) {

          } else {
            this.props.history.replace('/')
          }
        }
      })
  }

  render() {
    return null
  }
}

export default withRouter(AuthRoute)