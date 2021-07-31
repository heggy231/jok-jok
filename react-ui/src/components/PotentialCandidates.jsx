import React, { useEffect, useState } from "react";
import faker from "faker";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const PotentialCandidates = () => {

  // loading of api data
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
    const createData = (n) => {
      // set loading to true since data fetching
      // setLoading(true);

      let data = [];
  
      for (let i = 0; i < n; i++) {
        let nPosts = Math.ceil(Math.random() * 11);
        let posts = [];
  
        for (let j = 0; j < nPosts; j++) {
          posts.push(faker.image.food());
        }
        data.push({
          id: faker.datatype.uuid(),
          name: faker.name.findName(),
          gender: faker.name.gender(),
          email: faker.internet.email(),
          avatar: faker.image.avatar(),
        });
      }
      return data;
    };
    
    let peopleData = createData(Math.ceil(Math.random() * 10));
    console.log('peopleData: ====>', peopleData);
    // setLoading(false);
  // }, [])

  

  return (
    
    <div>
      People Data coming
      {/* {peopleData.map(person => (
          <div>
            {person.name}
          </div>
          )
      )} */}
    </div>
  );
};

// material ui use help: https://youtu.be/6dWmB8MISAQ?t=861

export default PotentialCandidates;