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

  const handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;
    const copy = Object.assign({}, fields, {
      ...fields,
      [key]: value,
    });
    setFields(copy);
  };

  const handleSubmit = e => {
    e.preventDefault();
    submitForm(fields);
    setFields(defaultFields);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      </form>
    </div>
  )
};

const mapStateToProps = (state) => ({
  isSubmitted: state.formData.isSubmitted,
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: (fields) => dispatch(submitForm(fields)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
