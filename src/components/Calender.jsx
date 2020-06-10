import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectEvents } from "../redux/events/eventsSelectors";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Event from "./Event";

const Calender = () => {
  const [currentIndex, setIndex] = useState(1);
  const [isFirstDay, setIsFistDay] = useState(false);

  // redux state selector
  const { eventsList } = useSelector(
    createStructuredSelector({
      eventsList: selectEvents,
    })
  );

  const handleChange = (event) => {
    setIsFistDay(event.target.checked);
  };

  // data to be rendered
  const renderData = () => {
    let data;
    if (isFirstDay) {
      const list = eventsList[currentIndex];
      data = list[0];
    } else {
      data = eventsList[currentIndex];
    }

    return data;
  };

  //final render data
  const finalData = eventsList.length ? renderData() : [];

  return (
    <section className="features-section">
      <h1 className="heading-primary center-text">
        <span className="heading-primary--main">Events Pro</span>
        <span className="heading-primary--sub">events at a glance</span>
      </h1>
      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        className="mb-sm"
      >
        <a
          href="#!"
          className="btn btn--white btn--animated"
          onClick={() => setIndex(0)}
        >
          <FaArrowLeft className="mr-sm" style={{ color: "#55c57a" }} />
          previous week
        </a>
        <a
          href="#!"
          className="btn btn--white btn--animated ml-sm"
          onClick={() => {
            if (currentIndex === 0) {
              setIndex(1);
            } else {
              setIndex(2);
            }
          }}
        >
          next week
          <FaArrowRight className="ml-sm" style={{ color: "#55c57a" }} />
        </a>
      </div>
      <div className="center-text mb-sm">
        <input
          className="styled-checkbox"
          id="styled-checkbox-2"
          type="checkbox"
          checked={isFirstDay}
          onChange={handleChange}
        />
        <label htmlFor="styled-checkbox-2">first day of the week</label>
        <a
          href="#!"
          className="btn-text ml-sm"
          onClick={() => {
            setIndex(1);
            setIsFistDay(false);
          }}
        >
          Reset
        </a>
      </div>
      <div className="row">
        {eventsList.length ? (
          <>
            {isFirstDay ? (
              <Event
                date={finalData.date}
                key={finalData.date}
                event={finalData.event}
              />
            ) : (
              finalData.map((data) => (
                <Event date={data.date} key={data.date} event={data.event} />
              ))
            )}{" "}
          </>
        ) : (
          <h1 className="heading-primary center-text">>Fetching Data</h1>
        )}
      </div>
    </section>
  );
};

export default Calender;
