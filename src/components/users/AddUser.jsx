import React from "react";

const AddUser = ({ usersValue }) => {
  return (
    <tr className="body-tr">
      <td>{usersValue.name}</td>
      <td>{usersValue.email}</td>
      <td>{usersValue.phone}</td>
      <td>{usersValue.age}</td>
    </tr>
  );
};

export default AddUser;
