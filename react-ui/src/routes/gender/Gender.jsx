import React from 'react';
import './Gender.css'

const Gender = () => {
  return (
    <div>
      <h1>Gender Preference</h1>
      <p>Do you like to date Male or Female?</p>
      <img src="/male.jpeg" alt="male" />
      <button className="btn btn-primary">male</button>
      <img src="/female.jpeg" alt="female" />
      <button className="btn btn-primary">female</button>
    </div>
  );
};

export default Gender;
