const moment = require("moment");

// function to create the final data to be displayed on the UI
export const formatReponseData = (reponseData, dates) => {
  const newData = getData(reponseData, dates);

  const final = chunkArray(newData, 7);

  return final;
};

// function to get all dates between a given startDate and endDate
export const getDays = (startDate, endDate) => {
  const dates = [];
  let currentDate = startDate;
  const addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  while (currentDate <= endDate) {
    dates.push(moment(currentDate).format("YYYY-MM-DD"));
    currentDate = addDays.call(currentDate, 1);
  }

  return dates;
};

// function to get match data from response from apiCall and dates
const getData = (dist, dates) => {
  const newData = [];
  let event;

  for (let i in dates) {
    if (dist[dates[i]] !== undefined) {
      event = dist[dates[i]];
    } else {
      event = [];
    }
    newData.push({ date: dates[i], event });
  }

  return newData;
};

// function to create array chunks
const chunkArray = (array, chunkSize) => {
  const chunkedArr = [];
  let i = 0;
  while (i < array.length) {
    chunkedArr.push(array.slice(i, i + chunkSize));
    i += chunkSize;
  }

  return chunkedArr;
};
