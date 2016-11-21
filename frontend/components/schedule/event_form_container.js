import EventForm from './event_form';
import { connect } from 'react-redux';
import { createEvent, deleteEvent } from '../../actions/events_actions'

const mapStateToProps = ({ events }, { hidden }) => ({
  events,
  hidden
});

const mapDispathToProps = (dispatch, { hideForm })  => ({
  createEvent: data => dispatch(createEvent(data)),
  deleteEvent: id => dispatch(deleteEvent(id)),
  hideForm
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(EventForm);
