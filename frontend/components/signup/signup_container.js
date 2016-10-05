import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_action.js'

const mapStateToProps = ({ teams, session }) => {

  return({
    teams,
    errors: session.errors,
    loggedIn: Boolean(session.currentUser)
  })
}

const mapDispatchToProps = (dispatch) => ({
  processForm: user => dispatch(signup(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
