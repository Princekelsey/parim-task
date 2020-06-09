import { takeLatest, put, all, call } from "redux-saga/effects";
import eventsActionTypes from "./eventsActionTypes";
import { getAllEventsFailed, getAllEventsSuccess } from "./eventsActions";
import Server from "../../api";
import { formatReponseData } from "../../utils";

// // this week
// const startOfWeek = moment().startOf("isoWeek").format("YYYY-MM-DD");
// const endOfWeek = moment().endOf("isoWeek").format("YYYY-MM-DD");
// console.log(".........this week.........");
// console.log(startOfWeek);
// console.log(endOfWeek);

// // next week
// console.log(".........next week.........");
// console.log(moment().add(1, "weeks").startOf("isoWeek").format("YYYY-MM-DD"));
// console.log(moment().add(1, "weeks").endOf("isoWeek").format("YYYY-MM-DD"));

// // last week
// console.log(".........last week.........");
// console.log(
//   moment().subtract(1, "weeks").startOf("isoWeek").format("YYYY-MM-DD")
// );
// console.log(
//   moment().subtract(1, "weeks").endOf("isoWeek").format("YYYY-MM-DD")
// );

function* fetchEvents({ payload: { startDate, endDate } }) {
  const request = {
    apiKey: process.env.REACT_APP_APIKEY,
    // startDate: moment()
    //   .subtract(1, "weeks")
    //   .startOf("isoWeek")
    //   .format("YYYY-MM-DD"),
    // endDate: moment().add(1, "weeks").endOf("isoWeek").format("YYYY-MM-DD"),
    startDate,
    endDate,
  };

  try {
    const response = yield call(Server.getAllCalenderEvents, request);
    yield put(getAllEventsSuccess(formatReponseData(response.data.holidays)));
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
