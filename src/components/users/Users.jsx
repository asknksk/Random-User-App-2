import mailSvg from "../../assets/mail.svg";
// import manSvg from "./assets/man.svg";
import womanSvg from "../../assets/woman.svg";
// import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "../../assets/growing-up-woman.svg";
import mapSvg from "../../assets/map.svg";
import phoneSvg from "../../assets/phone.svg";
import padlockSvg from "../../assets/padlock.svg";
import cwSvg from "../../assets/cw.svg";
import { useState } from "react";
import AddUser from "./AddUser";

const Users = ({ defaultImage, user, users }) => {
  const {
    email,
    phone,
    dob: { age },
    name: { title, first, last },
    picture: { medium },
    location: { street },
    login: { password },
  } = user;

  const [tableValue, setTableValue] = useState([]);
  const [propert, setPropert] = useState("");
  const [userValue, setUserValue] = useState("");

  //   console.log(user);
  const usersValue = {
    email: email,
    phone: phone,
    age: age,
    name: title + " " + first + " " + last,
    street: street.name + " " + street.number,
    password: password,
  };

  const handleChange = (e) => {
    // e.target.style.background = "red";
    if (e.target.classList.contains("iconImg")) {
      setPropert(e.target.alt);
      const value = e.target.alt;
      setUserValue(usersValue[value]);
    }
  };

  const handleChangeUser = () => {
    users();
    setUserValue(usersValue.name);
  };

  const handleAddUser = () => {
    setTableValue([...tableValue, usersValue]);
  };
  return (
    <>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img src={medium} alt="random user" className="user-img" />
          <p className="user-title">My {propert || "name"} is</p>
          <p className="user-value">{userValue || usersValue.name}</p>
          <div className="values-list" onMouseOver={handleChange}>
            <button className="icon" data-label="name">
              <img src={womanSvg} alt="name" className="iconImg" id="iconImg" />
            </button>
            <button className="icon" data-label="email">
              <img src={mailSvg} alt="email" className="iconImg" id="iconImg" />
            </button>
            <button className="icon" data-label="age">
              <img
                src={womanAgeSvg}
                alt="age"
                className="iconImg"
                id="iconImg"
              />
            </button>
            <button className="icon" data-label="street">
              <img src={mapSvg} alt="street" className="iconImg" id="iconImg" />
            </button>
            <button className="icon" data-label="phone">
              <img
                src={phoneSvg}
                alt="phone"
                className="iconImg"
                id="iconImg"
              />
            </button>
            <button className="icon" data-label="password">
              <img
                src={padlockSvg}
                alt="password"
                className="iconImg"
                id="iconImg"
              />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button" onClick={handleChangeUser}>
              new user
            </button>
            <button className="btn" type="button" onClick={handleAddUser}>
              add user
            </button>
          </div>
          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              <AddUser tableValue={tableValue} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
