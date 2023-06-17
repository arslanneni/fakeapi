import React, { useState } from 'react';
import DataTable from './DataTable';

const DataButton = () => {
  const [getData, setGetData] = useState();

  const getAPIDate = () => {
    fetch('https://fakestoreapi.com/users')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        
        setGetData(json);
      });
  };

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={getAPIDate}>
        Get Data
      </button>
      <DataTable data={getData} />
     
    </>
  );
};

export default DataButton;
