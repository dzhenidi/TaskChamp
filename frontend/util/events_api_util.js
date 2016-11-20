export const createEvent = (event, success) => {
  $.ajax({
    method: 'POST'
    url: 'api/events'
    success
  })
}
