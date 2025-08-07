import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "https://github.com/ialbertmartinez/conference_event_planner/blob/91eb5ea828a346cfedda027841d53ccb3926b6c7/public/projector.jpg",
      name: "Projectors",
      cost: 200,
      quantity: 0,
    },
    {
      img: "https://github.com/ialbertmartinez/conference_event_planner/blob/91eb5ea828a346cfedda027841d53ccb3926b6c7/public/speaker.jpg",
      name: "Speaker",
      cost: 35,
      quantity: 0,
    },
    {
      img: "https://github.com/ialbertmartinez/conference_event_planner/blob/91eb5ea828a346cfedda027841d53ccb3926b6c7/public/microphone.jpg",
      name: "Microphones",
      cost: 45,
      quantity: 0,
    },
    {
      img: "https://github.com/ialbertmartinez/conference_event_planner/blob/91eb5ea828a346cfedda027841d53ccb3926b6c7/public/whiteboard.png",
      name: "Whiteboards",
      cost: 80,
      quantity: 0,
    },
    {
      img: "https://github.com/ialbertmartinez/conference_event_planner/blob/91eb5ea828a346cfedda027841d53ccb3926b6c7/public/signs.jpg",
      name: "Signage",
      cost: 80,
      quantity: 0,
    },
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
