import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_action';

const mapStateToProps = ({session}) => (
  { currentUser: session.currentUser }
);

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
