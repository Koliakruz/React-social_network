import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer'
import {Navigate, useMatch} from 'react-router-dom'
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : 22267;
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  } 

  render() {
    return (
      <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatus}/>
    )
  }
}

let AuthNavigateComponent = withAuthNavigate(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
})

const ProfileURLMatch = (props) => {
  const match = useMatch('/profile/:userId/');
  return <AuthNavigateComponent {...props} match={match} />;
}

// export default compose(
//   connect(mapStateToProps, { getUserProfile }),
//   useMatch,
//   withAuthNavigate
// )
// (ProfileContainer);

export default connect(mapStateToProps, { getUserProfile, getStatus, updateStatus })(ProfileURLMatch);
