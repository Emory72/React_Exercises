import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function SeatItem({ seat }) {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);

  let classes = "btn border border-4";
  if (seat.daDat) {
    classes += " btn-danger";
  } else if (isSelected) {
    classes += " btn-success";
  } else {
    classes += " btn-light";
  }

  const handleSelect = () => {
    setIsSelected(!isSelected);

    dispatch({
      type: "selectSeat",
      payload: { ...seat, isSelected: !isSelected },
    });
  };

  return (
    <div>
      <button className={classes} disabled={seat.daDat} onClick={handleSelect}>
        {seat.soGhe}
      </button>
    </div>
  );
}
