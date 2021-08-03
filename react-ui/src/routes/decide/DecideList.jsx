import React from "react";
import "./DecideList.css";

const DecideList = (props) => {
  const candidates = props.candidates;
  const candidateItems = candidates.map((candidate, index) => {
    return (
      <div className="makemeflex-col give-margin-right-8">
        <img src={candidate.avatar} alt="person" />
        <span>
          <div className="rating">
            <div className="like grow">
              <i className="fa fa-thumbs-up fa-3x like" aria-hidden="true"></i>
            </div>
            <div className="dislike grow">
              <i className="fa fa-thumbs-down fa-3x like" aria-hidden="true"></i>
            </div>
          </div>
        </span>
      </div>
    );
  });
  return <div className="makemeflex">{candidateItems}</div>;
};

export default DecideList;
