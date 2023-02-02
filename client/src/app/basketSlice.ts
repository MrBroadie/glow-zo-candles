import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketProduct } from "../interfaces/basketProductInterface";
import { RootState } from "./store";

interface BasketState {
  value: BasketProduct[];
}

type Id = string | undefined;

const initialState: BasketState = {
  value: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<BasketProduct>) => {
      state.value = [...state.value, action.payload];
    },
    removeItemFromBasket: (state, action: PayloadAction<Id>) => {
      state.value = state.value.filter((p) => p.productId !== action.payload);
    },
    // updateItemInBasket: (state, action: PayloadAction<Id>) => {
    //   state.value.map((p) =>
    //     p.productId === action.payload && p.qty = action.payload
    //   );
    // },
    emptyBasket: (state) => {
      state.value = [];
    },
  },
});

export const { addToBasket, removeItemFromBasket, emptyBasket } =
  basketSlice.actions;

export const selectBasket = (state: RootState) => state.basket.value;

export default basketSlice.reducer;
