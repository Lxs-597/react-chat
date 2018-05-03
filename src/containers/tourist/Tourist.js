import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Tourist extends React.Component {
  render() {
    return (
      <div>
        <header>1111</header>
        <footer>2222</footer>
      </div>
    )
  }
}

const mapStateToprops = state => ({
  user: state.user
})
export default withRouter(
  connect(
    mapStateToprops
  )(Tourist)
)