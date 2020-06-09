import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectEvents } from "../redux/events/eventsSelectors";
import Event from "./Event";
import featureData from "./data";

const Calender = () => {
  const { eventsList } = useSelector(
    createStructuredSelector({
      eventsList: selectEvents,
    })
  );
  return (
    <section className="features-section">
      <h1 className="heading-primary center-text">
        <span className="heading-primary--main">Events Pro</span>
        <span className="heading-primary--sub">events at a glance</span>
      </h1>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="mb-sm"
      >
        <a href="#tours-section" className="btn btn--white btn--animated">
          previous week
        </a>
        <a href="#tours-section" className="btn btn--white btn--animated ml-sm">
          next week
        </a>
      </div>
      <div className="center-text mb-sm">
        <input
          class="styled-checkbox"
          id="styled-checkbox-2"
          type="checkbox"
          value="value2"
          // checked
        />
        <label for="styled-checkbox-2">first day of the week</label>
      </div>
      <div className="row">
        {eventsList.map((data) => (
          <Event date={data.date} key={data.date} event={data.event} />
        ))}
      </div>
    </section>
  );
};

export default Calender;
