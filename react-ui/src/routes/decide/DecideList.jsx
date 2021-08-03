import React, { useState } from "react";
import "./DecideList.css";

const DecideList = (props) => {
  const [isActive, setActive] = useState(false);

  const toggleClass = (e) => {
    console.log('e.target: ===>', e.target);
    // e.target.classList.add("active")
    // e.target.classList.toggle
    setActive(!isActive);
  };

  // $('.like, .dislike').on('click', function() {
  //   event.preventDefault();
  //   $('.active').removeClass('active');
  //   $(this).addClass('active');
  // });

  const candidates = props.candidates;
  const candidateItems = candidates.map((candidate, index) => {
    return (
      <div className="makemeflex-col give-margin-right-8">
        <img src={candidate.avatar} alt="person" />
        <span>
          <div className="rating">
            <div
              className={isActive ? "like active" : "like"}
              onClick={toggleClass}
            >
              <i className="fa fa-thumbs-up fa-3x like" aria-hidden="true"></i>
            </div>
            <div 
              className={isActive ? "dislike active" : "dislike"}
              onClick={toggleClass}
            >
              <i
                className="fa fa-thumbs-down fa-3x like"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </span>
      </div>
    );
  });
  return <div className="makemeflex">{candidateItems}</div>;
};

export default DecideList;
