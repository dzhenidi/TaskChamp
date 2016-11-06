import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = ({session}) => (
  {currentUser: session.currentUser}
);

const mapDispatchToProps = (dispatch) => ({
  updateProfile: () => dispatch(updateUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
