import React, { useState } from 'react';
import './Signup.css';
import fields from './fields.json';

function Form() {

  const [contact, setContact] = useState({});
  const [submittedContacts, setSubmittedContacts] = useState([]);

  const handleChange = e => {
    // const value = e.target.value;
    // const id = e.target.id;
    const {id, value} = e.target;
    console.log({...contact});
    // Object.assign create new Obj by value not reference
    const updatedContact = Object.assign({}, contact, {
      ...contact, // spread syntax
      // firName: 'Randy.'
      [id]: value // `[id]` (e.g. the key) is whatever `id` equals (ex: `firstName`, `lastName`, etc...), this makes id variable as a string
    })
    setContact(updatedContact);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const updatedSubmission = submittedContacts.concat([contact]);
    setSubmittedContacts(updatedSubmission);
    setContact({}); // reset
  };

  const fieldItems = fields.map((field) => {
    // import mock data fields array with obj id, name, type
    const {id, name, type} = field;
    return (
      <li className="App" key={id}>
        <label htmlFor={id}>{name}</label>
        <input 
          id={id}
          onChange={handleChange}
          type={type}
          placeholder={name}
          value={contact[id] || ''}
        />
      </li>
    )
  });

  return (
    <div className="App">
      <div className="login-container">
        <form className="form" onSubmit={handleSubmit}>
          <ul>
            {fieldItems}
          </ul>
          <button className="btn btn-primary" type="submit">Submit</button>
          {/* {JSON.stringify(contact)} */}
        </form>
      </div>
    </div>
  );
}

export default Form;