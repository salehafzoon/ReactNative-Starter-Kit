import {API_BASE_URL, ACCESS_TOKEN} from '../constants';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const unwrap = json => {
  if (json.data != undefined) return json.data;
  else return json;
};

const request = async options => {
  options = await _auth(options, false);

  return axios(options)
    .then(response => {
      console.log('api data:', response.data.data);
      return unwrap(response.data);
    })
    .catch(error => {
      console.log('[error message]');
      console.warn(error);
      return Promise.reject(error);
    });
};


const _auth = async (options, isBlob) => {
  let headers = {};
  if (!isBlob) {
    headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }
  if (await AsyncStorage.getItem(ACCESS_TOKEN)) {
    let token = await AsyncStorage.getItem(ACCESS_TOKEN);
    console.log('token:', token);

    headers['Authorization'] = 'Bearer ' + token;
  }

  if (isBlob == true) {
    headers['responseType'] = 'blob';
  }

  const defaults = {headers: headers};

  options = Object.assign({}, defaults, options);
  console.log('options:', options);

  return options;
};


// export function login(data) {
//   console.warn(data);
//   return request({
//     url: API_BASE_URL + 'auth/login',
//     method: 'POST',
//     data,
//   });
// }