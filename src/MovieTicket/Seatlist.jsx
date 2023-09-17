import React from "react";
import SeatItem from "./SeatItem";
export default function Seatlist({ seats }) {
  return (
    <table className="table table-borderless ">
      <tbody>
        <tr className="text-center fw-bold ">
          <td></td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
        </tr>
        {seats.map((rowData) => (
          <tr key={rowData.hang}>
            <td className="fw-bold">{rowData.hang}</td>
            {rowData.danhSachGhe.map((ghe) => (
              <td key={ghe.soGhe}>
                <SeatItem seat={ghe} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
