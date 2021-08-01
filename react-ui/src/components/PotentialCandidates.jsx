import React, { useEffect, useState } from "react";
import faker from "faker";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const PotentialCandidates = () => {
  const createData = (n) => {
    // set loading to true since data fetching
    // setLoading(true);
    let data = [];
    for (let i = 0; i < n; i++) {
      // build a filter
      if (faker.name.gender() === "Woman" || "Man") {
        data.push({
          id: faker.datatype.uuid(),
          name: faker.name.findName(),
          gender: faker.name.gender(),
          email: faker.internet.email(),
          avatar: faker.image.avatar(),
        });
      }

    }
    return data;
  };

  let peopleData = createData(11);
  console.log("peopleData: ====>", peopleData);

  return (
    <div>
      People Data coming
      <div>
        {peopleData.map((person) => (
          <div>{person.name} - {person.gender}</div>
        ))}
      </div>
    </div>
  );
};

// material ui use help: https://youtu.be/6dWmB8MISAQ?t=861

export default PotentialCandidates;
