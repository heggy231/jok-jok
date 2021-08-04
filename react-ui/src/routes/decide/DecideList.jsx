import React from "react";
import { connect } from "react-redux";
import "./DecideList.css";
import { updateFavorite } from "../../redux/actions";

const DecideList = ({ candidates, updateFavorite }) => {

  const handleSelection = (e) => {
    const thumbsUp = e.currentTarget.querySelector('i');
    const isActive = thumbsUp.classList.contains('active');
    const id = e.currentTarget.attributes['dataid'].value;
    const name = e.currentTarget.attributes['dataname'].value;
    if (isActive) {
      thumbsUp.classList.remove("active");
    } else {
      thumbsUp.classList.add("active");
    }
    updateFavorite(id, name);
  };

  const candidateItems = candidates.map((candidate, index) => {
    console.log(candidate)
    return (
      <div className="makemeflex-col give-margin-right-8" dataId={candidate.id} dataName={candidate.name} onClick={handleSelection}>
        <img src={candidate.avatar} alt="person" />
        <span>
          <div className="rating">
            <div className="like">
              <i
                className="fa fa-thumbs-up fa-3x like"
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

const mapDispatchToProps = dispatch => ({
  updateFavorite: (id, username) => dispatch(updateFavorite(id, username))
});

export default connect(null, mapDispatchToProps)(DecideList);
