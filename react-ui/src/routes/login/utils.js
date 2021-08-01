import React from 'react'

export const login = async ({ username, password }) => {
  // 3 states = pending, fufilled, rejected
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (username === 'heggy' && password === 'here') {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
