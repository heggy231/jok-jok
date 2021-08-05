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
      {formData ? (
        <>
          <div className="makeme-flex-col">
            <h1>Submitted! 🍥</h1>
            <img src="/tea.jpg" />
          </div>
          <div className="form">
            <h2> user submitted data: </h2>
            <ul className="submission-block">
              <li>{formData.username}</li>
              <li>{formData.gender}</li>
              <li>{formData.email}</li>
              <li>{formData.password}</li>
            </ul>
            <button
              className="submit btn btn-primary"
              onClick={handleStartOver}
            >
              Start Over
            </button>
          </div>

          {!isSubmitted && <Redirect exact to="/signup" />}
        </>
      ) : (
        <div className="makeme-flex-col">
          <h1> 🐑 Error: Hmm please fill out signup form</h1>
          <img src="/lookout.jpg" alt="binocular woman" />
          <button className="submit btn btn-primary" onClick={handleStartOver}>
            take me to signup page
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  formData: state.formData.formData,
  isSubmitted: state.formData.isSubmitted,
});

const mapDispatchToProps = (dispatch) => ({
  // action startOver gets dispatch which resets the signup form
  startOver: () => dispatch(startOver()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Submission);
