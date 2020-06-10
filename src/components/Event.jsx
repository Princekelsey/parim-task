import React from "react";
import moment from "moment";
import { FaCalendarAlt } from "react-icons/fa";

const Event = ({ date, event }) => {
  const day = moment(date).format("dddd");
  return (
    <div className="col-1-of-4 mb-sm">
      <div className="feature-box">
        <FaCalendarAlt className="feature-box__icon" />
        <h2>{day}</h2>
        <h3 className="heading-tertiary mb-md"> {date}</h3>
        {event.length ? (
          <>
            <h4>Event(s)</h4>
            {event.map((e, index) => (
              <ul key={index}>
                <li className="mb-sm">
                  <strong>Type: </strong>
                  {e.type} <br></br>
                  <strong>Name: </strong>
                  {e.name}
                </li>
              </ul>
            ))}{" "}
          </>
        ) : (
          <p className="feature-box__text">No event(s) on this date</p>
        )}
      </div>
    </div>
  );
};

export default Event;
