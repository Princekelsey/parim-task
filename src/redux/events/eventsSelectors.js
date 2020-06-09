import { createSelector } from "reselect";

const selectEventsState = (state) => state.allEvents;

export const selectEvents = createSelector(
  [selectEventsState],
  (allEvents) => allEvents.events
);

export const selectIsPending = createSelector(
  [selectEventsState],
  (allEvents) => allEvents.pending
);
