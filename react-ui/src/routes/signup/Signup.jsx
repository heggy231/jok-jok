import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { submitForm } from "../../redux/actions";
import "./Signup.css";

const Signup = ({ isSubmitted, submitForm }) => {
  const defaultFields = {
    username: "",
    gender: "",
    email: "",
    password: "",
  };

  const [fields, setFields] = useState(defaultFields);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const copy = Object.assign({}, fields, {
      ...fields,
      [key]: value,
    });
    setFields(copy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(fields); // send form data to redux action submitForm
    setFields(defaultFields);
  };

  return (
    <div className="App">
      <div className="signup-container">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Signup:</h2>
          <input
            name="username"
            type="text"
            onChange={handleChange}
            placeholder="username"
            value={fields.username}
          />
          <input
            name="gender"
            type="text"
            onChange={handleChange}
            placeholder="female? or male?"
            value={fields.gender}
          />
          <input
            name="email"
            type="text"
            onChange={handleChange}
            placeholder="email"
            value={fields.email}
          />
          <input
            name="password"
            type="text"
            onChange={handleChange}
            placeholder="password"
            value={fields.password}
          />
          <button className="submit btn btn-primary">Submit</button>
        </form>
        {isSubmitted && <Redirect to="/submission" />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isSubmitted: state.formData.isSubmitted,
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: (fields) => dispatch(submitForm(fields)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
