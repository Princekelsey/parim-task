import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import HomePage from "./pages/HomePage";
import { getAllEvents } from "./redux/events/eventsActions";
import moment from "moment";

function App() {
  const dispatch = useDispatch();
  const fetchEvents = (request) => dispatch(getAllEvents(request));
  useEffect(() => {
    fetchEvents({ startDate: "2020-06-01", endDate: "2020-06-30" });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
