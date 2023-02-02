import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketProduct } from "../../interfaces/basketProductInterface";

interface BasketState {
  value: BasketProduct[];
}

const initialState: BasketState = {
  value: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<BasketProduct[]>) => {
      state.value = action.payload;
    },
  },
});

export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;
