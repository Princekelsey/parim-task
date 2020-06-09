import React from "react";
import moment from "moment";

const Event = ({ date, event, info }) => {
  const formarted = moment(date).format("dddd");
  return (
    <div className="col-1-of-4 mb-sm">
      <div className="feature-box">
        {/* <i className={icon}></i> */}
        <h2>{formarted}</h2>
        <h3 className="heading-tertiary mb-sm"> {date}</h3>
        <h4>Events</h4>
        {event.map((e) => (
          <ul>
            <li className="mb-sm">
              <strong>Type: </strong>
              {e.type} <br></br> <strong>Name: </strong>
              {e.name}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Event;
