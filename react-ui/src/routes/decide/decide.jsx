import React, { useState } from "react";
import "./decide.css";
import data from "../../data";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";

const Decide = (props) => {
  const { toggleAdd, toggleRemove } = props;
  console.log("gender chosen from global state:", props.gender);
  console.log("from my data file:", data[0].gender);

  const storeGender = props.gender.gender;
  console.log("storeGender", storeGender);
  const filterResult = data.filter(
    (person) => person.gender === props.gender.gender
  );
  console.log("filterResult ==>", filterResult);

  return (
    <>
      <div className="y-wrap y-wrap--inner">
      <h2>Dating candidates:</h2>
      <div className="makemeflex y-wrap y-wrap--inner">
        {filterResult.map((candidate) => {
          return (
            <div className="makemeflex-col-decide give-margin-right-8">
              <img src={candidate.avatar} alt="person" />
              {candidate.name}
              <span>
                <div className="rating">
                  <div className="like">
                    <i
                      className="fa fa-thumbs-up fa-3x like"
                      aria-hidden="true"
                      onClick={(e) => {
                        e.preventDefault();
                        if (
                          e.target.className ===
                          "fa fa-thumbs-up fa-3x like active"
                        ) {
                          e.target.classList.remove("active");
                          toggleRemove(candidate.id);
                        } else {
                          e.target.classList.add("active");
                          toggleAdd(candidate);
                        }
                      }}
                    ></i>
                  </div>
                </div>
              </span>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  // Translate Redux state into React props using { connect }
  return {
    // key is the prop that React will see, value is for Redux state.
    // propName seen by React : value-in-state by Redux
    gender: state.gender,
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleAdd: (candidate) =>
    dispatch(addFavorite(candidate.id, candidate.name, candidate.email)),
  toggleRemove: (id) => dispatch(removeFavorite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Decide);
