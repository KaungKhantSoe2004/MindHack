import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sponsors: [],
  mainSponsors: [],
  prevSponsors: [],
  diamondSponsors: [],
};
const sponsorSlice = createSlice({
  name: "sponsors",
  initialState,
  reducers: {
    setStoreReduxSponsors: (state, action) => {
      state.sponsors = action.payload;
    },
    setReduxMainSponsors: (state, action) => {
      state.mainSponsors = action.payload;
    },
    setReduxDiamondSponsors: (state, action) => {
      state.diamondSponsors = action.payload;
    },
    setReduxPrevSponsors: (state, action) => {
      state.prevSponsors = action.payload;
    },
  },
});
export const {
  setStoreReduxSponsors,
  setReduxDiamondSponsors,
  setReduxMainSponsors,
  setReduxPrevSponsors,
} = sponsorSlice.actions;
export default sponsorSlice.reducer;
