// format reponse data to an array
export const formatReponseData = (data) => {
  const newData = [];
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      newData.push({ date: key, event: data[key] });
    }
  }
  return newData;
};
