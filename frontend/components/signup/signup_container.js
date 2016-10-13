import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, login } from '../../actions/session_action';

const mapStateToProps = ({ teams, session }) => {

  return({
    teams,
    errors: session.errors,
    loggedIn: Boolean(session.currentUser)
  })
}

const mapDispatchToProps = (dispatch) => ({
  processForm: user => dispatch(signup(user)),
  demoLogin: user => dispatch(login(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
