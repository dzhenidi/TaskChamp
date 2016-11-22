export const createEvent = (schedule_event, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/events',
    data: { schedule_event },
    success
  });
};

export const deleteEvent = id => {
  $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`,
    success
  });
};

export const fetchEvent = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`,
    success
  });
};
