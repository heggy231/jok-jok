import React from 'react'

export const login = async ({ username, password }) => {
  // 3 states = pending, fufilled, rejected
  //  setTimeout that mimics an api call
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (username === 'heggy' && password === 'love') {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
