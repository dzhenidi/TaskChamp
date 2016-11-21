import React from 'react';
import { connect } from 'react-redux';
import EventShow from './event_show';

const mapStateToProps = ({events}, ownProps) => ({
  scheduleEvent: events[parseInt(ownProps.params.id)]
});

export default connect(
  mapStateToProps
)(EventShow)
