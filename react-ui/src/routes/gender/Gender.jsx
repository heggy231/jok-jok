import React from 'react';
import './Gender.css';
import { updateGender } from '../../redux/actions';
import { connect } from 'react-redux';

const Gender = ({ updateGender }) => {

  const handleClick = (e) => {
    e.preventDefault();
    updateGender(e.target.name);
    console.log('e.target.name ===>', e.target.name)
  }

  return (
    <div>
      <h1>Gender Preference</h1>
      <p>Do you like to date Male or Female?</p>
      <img src="/male.jpeg" alt="male" />
      <button onClick={handleClick} name="male" className="btn btn-primary">male</button>
      <img src="/female.jpeg" alt="female" />
      <button onClick={handleClick} name="female" className="btn btn-primary">female</button>
    </div>
  );
};

export default connect(null, { updateGender })(Gender);
