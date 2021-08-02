import React, { useState } from "react";
import "./decide.css";
import data from "../../data";
import { connect } from "react-redux";
import DecideList from "./DecideList";

const Decide = (props) => {
  const [filteredFolks, setFilteredFolks] = useState();

  console.log("gender chosen from global state:", props.gender);
  console.log("from my data file:", data[0].gender);

  const filterResult = data.filter((person) => person.gender === props.gender);
  console.log("filterResult ==>", filterResult);

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
