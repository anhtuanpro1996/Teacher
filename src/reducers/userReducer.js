import * as URL from '../constants/Url';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function getData() {
  try {
    const res = axios({
      url: URL.GET_ALL_USER,
      method: 'get',
      timeout: 8000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.status == 200) {
      // test for status you want, etc
      console.log(res.status);
    }
    // Don't forget to return something
    return res.data;
  } catch (err) {
    console.error(err);
  }
}
const data1 = {};
const da = getData();

Promise.all([da]).then(function(values) {
  console.log('dd', values);
});
console.log('INIT', da);
const initialState = {
  users: [
  ],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
  case 'LOAD_USER_SUCCESS':
    return action.users;
  default:
    return state;
  }
}
