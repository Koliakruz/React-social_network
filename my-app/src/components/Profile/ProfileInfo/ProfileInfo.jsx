import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return <div className={classes.content}>
    {/* <div>
      <img src="https://th-thumbnailer.cdn-si-edu.com/vSnitgUqCQCRSx7mkHZtHZHry4U=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg" />
    </div> */}
    <div className={classes.profileInfoBlock}>
      <img src={props.profile.photos.large} />
      <ProfileStatus status = {props.status} updateStatus = {props.updateStatus} />
      <div>{props.profile.fullName}</div>
      <div>{props.profile.aboutMe}</div>
      <div>
        My social media:
          <li>{props.profile.contacts.vk}</li>
          <li>{props.profile.contacts.twitter}</li>
      </div>
    </div>
  </div>
}

export default ProfileInfo;