import React from 'react';
import { useState, useEffect } from 'react';

const HelloWorld = () => {

  const [data, setData] = useState('Hello World');

  useEffect(() => {
    // useEffect inside to fetch data
    const url = '/hello-world';

    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log('Oh no data!', error));
  }, [])

  if (data) {
    return (
      <div>
        {data}
      </div>
    )
  }

  // if no data => return null
  return null;
}

export default HelloWorld;