export const createEvent = (event, success) => {
  debugger
  $.ajax({
    method: 'POST',
    url: 'api/events',
    event: { event },
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
