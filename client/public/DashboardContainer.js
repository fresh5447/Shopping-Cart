import React from 'react'
import propTypes from 'prop-types'
import {graphql} from 'react-apollo'
import {withRouter} from 'react-router-dom'
import gql from 'graphql-tag'
import Dashboard from '../../components/Dashboard/Dashboard'
import Authenticate from '../../containers/Authenticate/AuthenticateContainer'


class DashboardContainer extends React.Component {
  renderLoggedIn () {
    return (
      <div>
        { this.props.data && this.props.data.user
          ? <Dashboard {...this.props.data.user} />
        : <h3> Loading user data...</h3>
        }
      </div>
    )
  }

  renderLoggedOut () {
    return (
      <div style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
        <Authenticate />
      </div>
    )
  }

  _isLoggedIn = () => {
    return this.props.data.user
  }

  render () {
    if (this.props.data.loading) {
      return <div>Loading</div>
    }

    if (this._isLoggedIn()) {
      return this.renderLoggedIn()
    }
    else {
      return this.renderLoggedOut()
    }
  }

}

DashboardContainer.propTypes = {
  data: propTypes.object.isRequired
}


// <h3>Hello</h3>
// { !this.props.data.loading
//   ? <Dashboard {...this.props.data.user} />
// : <h3> Loading user data...</h3>
// }
const userQuery = gql`
  query userQuery {
    user {
      id,
      bio,
      linkedIn,
      name,
      nickname,
      picture,
      role,
      twitter,
      blogUrl,
      classes {
        id,
        title,
        startDate,
        endDate,
        zoomLink,
        sprints {
          title,
          id,
          classSessions {
            id,
            date,
            summary
          },
        }
      }
    }
  }
`

export default graphql(userQuery, {options: {forceFetch: true}})(
  withRouter(DashboardContainer)
)
