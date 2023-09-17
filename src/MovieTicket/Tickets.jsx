import React from "react";
import { useSelector } from "react-redux";

export default function Tickets() {
  const { selectedSeats, userInfo, totalPrice } = useSelector((state) => {
    return state.movieTicket;
  });

  return (
    <table className="table text-center">
      <thead className="table-secondary">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Number of Seats</th>
          <th scope="col">Seat</th>
          <th scope="col">Total Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{userInfo.name}</td>
          <td>{userInfo.numberOfSeats}</td>
          <td>{selectedSeats.map((item) => item.soGhe).join(",")}</td>
          <td>{totalPrice.toLocaleString()}</td>
        </tr>
      </tbody>
    </table>
  );
}
