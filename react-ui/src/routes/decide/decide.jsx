import React, { useState } from "react";
import "./decide.css";
import PotentialCandidates from "../../components/PotentialCandidates";
import data from "../../data";
import { connect } from "react-redux";
import DecideList from "./DecideList";

const Decide = (props) => {

  

  console.log(props.gender)
  console.log(data[0].gender)
  
  return (
    <>
      <h1>Decide Page</h1>
      <DecideList candidates={data} />
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

export default connect(mapStateToProps)(Decide);
