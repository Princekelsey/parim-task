import eventsReducer from "../eventsReducer";
import eventsActionTypes from "../eventsActionTypes";
import { initialState } from "../eventsReducer";

it("Should return default state ", () => {
  const newState = eventsReducer(undefined, {});
  expect(newState).toEqual(initialState);
});

it("Should return new state if received a type", () => {
  const response = {
    ...initialState,
    pending: true,
  };
  const newState = eventsReducer(undefined, {
    type: eventsActionTypes.FETCH_ALL_EVENTS_START,
  });
  expect(newState).toEqual(response);
});
