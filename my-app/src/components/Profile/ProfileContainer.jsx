import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer'
import {useMatch} from 'react-router-dom'
import { userAPI } from "../../api/api";


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : 22267;
    this.props.getUserProfile(userId);
  } 

  render() {
    return (
      <Profile {...this.props} profile = {this.props.profile}/>
    )
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

const ProfileURLMatch = (props) => {
  const match = useMatch('/profile/:userId/');
  return <ProfileContainer {...props} match={match} />;
}

export default connect(mapStateToProps, { getUserProfile })(ProfileURLMatch);
