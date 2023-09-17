import React from "react";
import Seatlist from "./Seatlist";
import Tickets from "./Tickets";
import data from "./data.json";
import UserInfo from "./UserInfo";

export default function Movie() {
  return (
    <div className="background">
      <h1 className="text-center mb-5 fw-bold text-white">
        MOVIE SEAT SELECTION
      </h1>
      {/* Container */}
      <div className="container ">
        <h4 className="text-white">
          Fill The Required Details Below And Select Your Seats
        </h4>

        <UserInfo />

        <Seatlist seats={data} />

        <h2 className="bg-warning py-3 text-center ">SCREEN THIS WAY</h2>

        <Tickets />
      </div>
    </div>
  );
}
