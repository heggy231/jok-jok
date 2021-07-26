import { connect } from "react-redux";

const Start = ({ initialCandidates }) => {
  // page with people 10 folks to pick
  //  initialCandidates is an array obj
  const candidates = initialCandidates.map((candidate) => {
    return (
      <li>
        <strong>{candidate.name}</strong> - <img src={candidate.url} />
      </li>
    );
  });
  return <ul>{candidates}</ul>;
};

const mapStateToProps = (state) => ({
  initialCandidates: state.initialCandidates,
});

export default connect(mapStateToProps)(Start);

// 1. hook it up to the store
// 2. update the reducer initialCandidates 10 in array of obj
// view
