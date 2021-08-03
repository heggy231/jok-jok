import React from "react";
import "./Gender.css";
import { updateGender } from "../../redux/actions";
import { connect } from "react-redux";

const Gender = ({ updateGender }) => {
  const handleClick = (e) => {
    e.preventDefault();
    updateGender(e.target.name);
    console.log("e.target.name ===>", e.target.name);
  };

  return (
    <div>
      <h1>Gender Preference</h1>
      <p>Do you like to date Male or Female?</p>
      <div className="makemeflex">
        <div className="makemeflex-col give-margin-right-8">
          <img src="/male.jpeg" alt="male" className="give-margin-bottom-2" />
          <button onClick={handleClick} name="male" className="btn btn-primary">
            male
          </button>
        </div>
        <div className="makemeflex-col">
          <img src="/female.jpeg" alt="female" className="give-margin-bottom-2"/>
          <button
            onClick={handleClick}
            name="female"
            className="btn btn-primary"
          >
            female
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { updateGender })(Gender);
