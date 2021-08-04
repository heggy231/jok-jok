import React, { useState } from "react";
import { connect } from "react-redux";
import "./DecideList.css";
import { updateFavorite } from "../../redux/actions";

const DecideList = (props) => {

  const toggleClass = (e) => {
    console.log("e.target: ===>", e.target);
    if (e.target.className === "fa fa-thumbs-up fa-3x like active") {
      e.target.classList.remove("active");
    } else {
      e.target.classList.add("active");
    }
    dispatch(updateFavorite(1, 'heggy here'))
  };

  const candidates = props.candidates;
  const candidateItems = candidates.map((candidate, index) => {
    return (
      <div className="makemeflex-col give-margin-right-8">
        <img src={candidate.avatar} alt="person" />
        <span>
          <div className="rating">
            <div className="like">
              <i
                className="fa fa-thumbs-up fa-3x like"
                aria-hidden="true"
                onClick={toggleClass}
              ></i>
            </div>
          </div>
        </span>
      </div>
    );
  });
  return <div className="makemeflex">{candidateItems}</div>;
};

export default connect(null, { updateFavorite })(DecideList);
