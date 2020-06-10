import { takeLatest, put, all, call } from "redux-saga/effects";
import eventsActionTypes from "./eventsActionTypes";
import { getAllEventsFailed, getAllEventsSuccess } from "./eventsActions";
import Server from "../../api";
import { formatReponseData, getDays } from "../../utils";
import moment from "moment";

function* fetchEvents() {
  const request = {
    apiKey: process.env.REACT_APP_APIKEY,
    startDate: moment()
      .subtract(1, "weeks")
      .startOf("isoWeek")
      .format("YYYY-MM-DD"),
    endDate: moment().add(1, "weeks").endOf("isoWeek").format("YYYY-MM-DD"),
  };

  const dates = getDays(new Date(request.startDate), new Date(request.endDate));

  try {
    const response = yield call(Server.getAllCalenderEvents, request);

    yield put(
      getAllEventsSuccess(formatReponseData(response.data.holidays, dates))
    );
  } catch (error) {
    yield put(getAllEventsFailed(error));
  }
}

function* onFetchEventsStart() {
  yield takeLatest(eventsActionTypes.FETCH_ALL_EVENTS_START, fetchEvents);
}

export function* eventsSagas() {
  yield all([call(onFetchEventsStart)]);
}
