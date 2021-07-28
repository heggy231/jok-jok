import React, { useState } from 'react';
import { login } from './utils';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const formSubmit = e => {
    e.preventDefault();
  }

  return (
    <>
      <form className="form" onSubmit={formSubmit}>
        <h2>Signup</h2>
        <input 
          type="text" 
          placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
          <br />
        <div className="radio">
          <label htmlFor="female">
            <input 
              type="radio"
              value="female"
              checked={selectedOption === "female"}
              onChange={e => setSelectedOption(e.target.value)}
              id="female" 
              name="gender"
            />
            female
          </label>
        </div>
        <div className="radio">
          <label htmlFor="male">
            <input 
              type="radio"
              value="male"
              checked={selectedOption === "male"}
              onChange={e => setSelectedOption(e.target.value)}
              id="male" 
              name="gender"
            />
            male
          </label>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;

// refer to: digitalCraft/react/lynda-react/hello-react/src/LoginPlain.js
// radio button: https://app.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs