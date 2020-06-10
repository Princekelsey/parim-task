import eventsActionTypes from "./eventsActionTypes";

export const initialState = {
  pending: false,
  events: [],
  error: null,
};

const eventsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case eventsActionTypes.FETCH_ALL_EVENTS_START:
      return {
        ...state,
        pending: true,
      };
    case eventsActionTypes.FETCH_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        events: payload,
      };
    case eventsActionTypes.FETCH_ALL_EVENTS_FAILED:
      return {
        ...state,
        pending: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default eventsReducer;
