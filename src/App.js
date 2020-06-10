import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import HomePage from "./pages/HomePage";
import { getAllEvents } from "./redux/events/eventsActions";

function App() {
  const dispatch = useDispatch();
  const fetchEvents = () => dispatch(getAllEvents());
  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
