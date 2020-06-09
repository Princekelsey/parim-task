import eventsActionTypes from "./eventsActionTypes";

export const getAllEvents = (request) => ({
  type: eventsActionTypes.FETCH_ALL_EVENTS_START,
  payload: request,
});

export const getAllEventsSuccess = (events) => ({
  type: eventsActionTypes.FETCH_ALL_EVENTS_SUCCESS,
  payload: events,
});

export const getAllEventsFailed = (error) => ({
  type: eventsActionTypes.FETCH_ALL_EVENTS_FAILED,
  payload: error,
});
