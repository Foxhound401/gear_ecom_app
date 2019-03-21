import axios from 'axios';
const url = 'http://10.82.139.8:5000/';

export const initProduct = item => {
  return axios
    .get(`${url}gearecom/initProduct`)
    .then(res => {
      if (res) {
        return res.data;
      }
    })
    .catch(err => {
      console.log('ERROR AT GET CATEGORIES_API ' + err);
    });
};

export const initCategory = item => {
  return axios
    .get(`${url}gearecom/initCategory`)
    .then(res => {
      if (res) {
        return res.data;
      }
    })
    .catch(err => {
      console.log('ERROR AT GET CATEGORIES_API ' + err);
    });
};

export const initSlider = item => {
  return axios
    .get(`${url}gearecom/initSlider`)
    .then(res => {
      if (res) {
        return res.data;
      }
    })
    .catch(err => {
      console.log('ERROR AT GET CATEGORIES_API ' + err);
    });
};

