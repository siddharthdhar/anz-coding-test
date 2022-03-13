const axios = require("axios");

const getData = (url, headers, data) => {
  return restInteraction("get", url, data, headers);
};

const postData = (url, headers, data) => {
  return restInteraction("post", url, headers, data);
};

const patchData = async (url, headers, data) => {
  return restInteraction("patch", url, headers, data);
};

const deleteData = async (url, headers, data) => {
  return restInteraction("delete", url, headers, data);
};

const restInteraction = async (method, url, headers, data) => {
  return axios({
    method: method,
    url: url,
    data: data,
    headers: headers,
  }).catch(function (response) {
    return response.response;
  });
};

module.exports = {
  getData,
  postData,
  patchData,
  deleteData,
};
