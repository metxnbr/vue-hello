export const setStorage = (type, data) => {
  const dataStr = JSON.stringify(data);
  localStorage.setItem(type, dataStr);
};

export const getStorage = (type) => {
  const data = localStorage.getItem(type);
  const dataObj = JSON.parse(data);
  return dataObj;
};
