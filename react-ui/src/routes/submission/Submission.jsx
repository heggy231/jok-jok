import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { startOver } from "../../redux/actions";

import "./Submission.css";

const Submission = ({ formData, isSubmitted, startOver }) => {
  const handleStartOver = () => {
    startOver();
  };

  return (
    <div className="y-wrap ywrap--inner">
      <h1>Submitted! 🍥</h1>
      <img src="/tea.jpg" />
      <ul className="submission-block">
        <li>{formData.username}</li>
        <li>{formData.gender}</li>
        <li>{formData.email}</li>
        <li>{formData.passsword}</li>
      </ul>
      <button className="submit btn btn-primary">Start Over</button>
      {!isSubmitted && <Redirect exact to="/signup" />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  formData: state.formData.formData
});

export default connect(mapStateToProps, mapDispatchToProps)(Submission);
