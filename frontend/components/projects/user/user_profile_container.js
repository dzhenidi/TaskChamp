import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = ({session}) => {
  return (
  { currentUser: session.currentUser }
);};

const mapDispatchToProps = (dispatch) => {
  return ({
    updateProfile: () => dispatch(updateUser())
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
