import React from "react";
import "./DecideList.css";

const DecideList = (props) => {
  const candidates = props.candidates;
  const candidateItems = candidates.map((candidate, index) => {
    return (
      <div>
        <img src={candidate.avatar} alt="person" />
      </div>
    );
  });
  return <div className="makemeflex">{candidateItems}</div>;
};

export default DecideList;
