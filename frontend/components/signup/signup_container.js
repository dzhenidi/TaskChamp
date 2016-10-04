import { connect } from 'react-redux';
import { SignupForm } from './signup_form';

const mapStateToProps = ({ teams }) => ({
  teams
})

export default connect(
  mapStateToProps
)(SignupForm);
