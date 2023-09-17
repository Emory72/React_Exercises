import { configureStore } from "@reduxjs/toolkit";
const initialState = {
  selectedSeats: [],
  userInfo: {
    name: "",
    numberOfSeats: "",
  },
  totalPrice: 0,
};

const movieTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "selectSeat": {
      const { isSelected, ...seat } = action.payload;

      if (isSelected) {
        const selectedSeats = [...state.selectedSeats, seat];
        const totalPrice = state.totalPrice + seat.gia;

        return { ...state, selectedSeats, totalPrice };
      }

      const selectedSeats = state.selectedSeats.filter(
        (item) => item.soGhe !== seat.soGhe
      );
      const totalPrice = state.totalPrice - seat.gia;

      return { ...state, selectedSeats, totalPrice };
    }
    case "userInfo": {
      return { ...state, userInfo: action.payload };
    }
    default:
      return state;
  }
};
const store = configureStore({
  reducer: {
    movieTicket: movieTicketReducer,
  },
});

export default store;
