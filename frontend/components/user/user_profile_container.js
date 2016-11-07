import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = ({session}) => {
  return (
  {currentUser: session.currentUser}
);};

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (id, formData) => dispatch(updateUser(id, formData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
