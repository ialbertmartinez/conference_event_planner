// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
      img: "https://github.com/ialbertmartinez/conference_event_planner/blob/91eb5ea828a346cfedda027841d53ccb3926b6c7/public/conference_seating.jpeg",
      name: "Conference Room (Capacity:15)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "https://github.com/ialbertmartinez/conference_event_planner/blob/91eb5ea828a346cfedda027841d53ccb3926b6c7/public/auditorium_seating.jpg",
      name: "Auditorium Hall (Capacity:200)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: "https://github.com/ialbertmartinez/conference_event_planner/blob/91eb5ea828a346cfedda027841d53ccb3926b6c7/public/presentation_seating.jpg",
      name: "Presentation Room (Capacity:50)",
      cost: 700,
      quantity: 0,
    },
    {
      img: "https://github.com/ialbertmartinez/conference_event_planner/blob/91eb5ea828a346cfedda027841d53ccb3926b6c7/public/large_meeting.jpg",
      name: "Large Meeting Room (Capacity:10)",
      cost: 900,
      quantity: 0,
    },
    {
      img: "https://github.com/ialbertmartinez/conference_event_planner/blob/91eb5ea828a346cfedda027841d53ccb3926b6c7/public/small_meeting.jpeg",
      name: "Small Meeting Room (Capacity:5)",
      cost: 1100,
      quantity: 0,
    },
  
  ],
  reducers: {
   
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === " Auditorium Hall (Capacity:200)" && state[index].quantity >= 3) {
          return;        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;

export default venueSlice.reducer;




