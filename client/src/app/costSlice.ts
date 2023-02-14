import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface CostState {
  value: number;
}

const initialState: CostState = {
  value: 0,
};
export const costSlice = createSlice({
  name: "cost",
  initialState,
  reducers: {
    incrementCost: (state, action) => {
      state.value += action.payload;
    },
    decrementCost: (state, action) => {
      state.value -= action.payload;
    },
    resetCost: (state) => {
      state.value = 0;
    },
  },
});

export const { incrementCost, decrementCost, resetCost } = costSlice.actions;

export const selectCost = (state: RootState) => state.cost.value;

export default costSlice.reducer;
