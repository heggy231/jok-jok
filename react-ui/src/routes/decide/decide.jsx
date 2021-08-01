import React, {useState} from 'react';
import './decide.css';
import PotentialCandidates from '../../components/PotentialCandidates';
import data from '../../data';
import { connect } from 'react-redux';

const Decide = ({ gender }) => {

  const [selection, setSelection] = useState([]); 

  // filter m/f
  const result = () => {
    switch (gender) {
      case 'female':
        const resultMale = data.filter( maleData => maleData.gender === 'male' )
        return resultMale;
      case 'male':
        const resultFemale = data.filter( femaleData => femaleData.gender === 'female' )
        return resultFemale;
      default: 
        return [];
    }
  }

  setSelection(result);

  return (
    <>
      <h1>Decide Page</h1>
      {/* filter to show m/f, mp the data */}
      {selection.map( eachperson => {
        return <div>{eachperson.name}</div>
      })}
      <div className="makemeflex">
        <img src="/female.jpeg" alt="female" />
        <button className="btn btn-primary">female</button>
        <img src="/female.jpeg" alt="female" />
        <button className="btn btn-primary">female</button>
        <img src="/female.jpeg" alt="female" />
        <button className="btn btn-primary">female</button>
        <img src="/female.jpeg" alt="female" />
        <button className="btn btn-primary">female</button>
        <img src="/female.jpeg" alt="female" />
        <button className="btn btn-primary">female</button>
        <img src="/female.jpeg" alt="female" />
        <button className="btn btn-primary">female</button>
        <img src="/female.jpeg" alt="female" />
        <button className="btn btn-primary">female</button>
        <img src="/female.jpeg" alt="female" />
        <button className="btn btn-primary">female</button>
        <img src="/female.jpeg" alt="female" />
        <button className="btn btn-primary">female</button>
        <img src="/female.jpeg" alt="female" />
        <button className="btn btn-primary">female</button>
      </div>

      <div className="makemeflex">
        <img src="/male.jpeg" alt="male" />
        <button className="btn btn-primary">male</button>
        <img src="/male.jpeg" alt="male" />
        <button className="btn btn-primary">male</button>
        <img src="/male.jpeg" alt="male" />
        <button className="btn btn-primary">male</button>
        <img src="/male.jpeg" alt="male" />
        <button className="btn btn-primary">male</button>
        <img src="/male.jpeg" alt="male" />
        <button className="btn btn-primary">male</button>
        <img src="/male.jpeg" alt="male" />
        <button className="btn btn-primary">male</button>
        <img src="/male.jpeg" alt="male" />
        <button className="btn btn-primary">male</button>
        <img src="/male.jpeg" alt="male" />
        <button className="btn btn-primary">male</button>
        <img src="/male.jpeg" alt="male" />
        <button className="btn btn-primary">male</button>
        <img src="/male.jpeg" alt="male" />
        <button className="btn btn-primary">male</button>
      </div>
    </>
  );
};


const mapStateToProps = (state) => {
  // Translate Redux state into React props using { connect }

  return {
    // key is the prop that React will see, value is for Redux state.  End goal is to provide `state.count` to the `Output` Component (dumb React component).
    // propName seen by React : value-in-state by Redux
    gender: state.gender
  }
}


export default connect(mapStateToProps)(Decide);
