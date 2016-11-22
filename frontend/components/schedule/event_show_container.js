import React from 'react';
import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/events_actions';

const mapStateToProps = ({events}, ownProps) => {
  debugger
return ({
  scheduleEvent: events[parseInt(ownProps.params.id)],
  id: ownProps.params.id
});};

const mapDispatchToProps = dispatch => ({
  requestEvent: id => dispatch(fetchEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
