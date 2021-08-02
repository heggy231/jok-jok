import React from 'react';


const DecideList = (props) => {

  const candidates = props.candidates;
  const candidateItems = candidates.map((candidate, index) => {
    return (
      <div>
        <img src={candidate.avatar} alt="person" />
      </div>
    )
  })
  return (
    <div>
      {candidateItems}
    </div>
  )
}

export default DecideList;