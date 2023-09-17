import React, { useState } from "react";
import Input from "@mui/joy/Input";
import { useDispatch } from "react-redux";

export default function UserInfo() {
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    name: "",
    numberOfSeats: "",
  });

  const handleInput = (evt) => {
    const { name, value } = evt.target;
    setUserInfo((prevUserIfo) => ({
      ...prevUserIfo,
      [name]: value,
    }));
  };

  const handleStart = () => {
    if (!userInfo.name || userInfo.numberOfSeats === "") {
      alert("Please insert name and number of seats");
    } else {
      dispatch({
        type: "userInfo",
        payload: userInfo,
      });
    }
  };

  return (
    <div>
      <div className="row my-3 text-white">
        <div className="col-md-6">
          <h4>Name:</h4>
          <Input
            type="text"
            name="name"
            placeholder="Type Your Name"
            value={userInfo.name}
            onChange={handleInput}
          />
        </div>
        <div className="col-md-6 ">
          <h4>Number of Seats</h4>
          <Input
            type="number"
            name="numberOfSeats"
            placeholder="Type The Number of Seats"
            value={userInfo.numberOfSeats}
            onChange={handleInput}
          />
        </div>
      </div>
      <button className="btn btn-primary fw-bold my-4" onClick={handleStart}>
        Start Selecting
      </button>
    </div>
  );
}
