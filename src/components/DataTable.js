import React from 'react';

const DataTable = ({ data }) => {
  if (!data) {
    return <p>Loading data...</p>;
  }

  return (
    <table className="table">
      <thead>
        <tr className="table-primary">
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">City</th>
          <th scope="col">User Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody className="table-dark">
        {data.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.name.firstname}</td>
            <td>{item.name.lastname}</td>
            <td>{item.address.city}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
