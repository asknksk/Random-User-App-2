import React from "react";

const AddUser = ({ tableValue }) => {
  console.log(tableValue);
  return (
    <>
      {tableValue?.map((user, index) => {
        return (
          <tr className="body-tr" key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.age}</td>
          </tr>
        );
      })}
      {/* <td>{usersValue.name}</td>
      <td>{usersValue.email}</td>
      <td>{usersValue.phone}</td>
      <td>{usersValue.age}</td> */}
    </>
  );
};

export default AddUser;
