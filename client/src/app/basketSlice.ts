import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketProduct } from "../interfaces/basketProductInterface";
import { RootState } from "./store";

interface BasketState {
  value: BasketProduct[];
}

interface SetQuantity {
  productId: string;
  qty: number;
  price: number;
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
      //&& p.scent
      state.value = state.value.filter((p) => p.productId !== action.payload);
    },
    updateItemInBasket: (state, action: PayloadAction<SetQuantity>) => {
      state.value.forEach((p) => {
        if (p.productId === action.payload.productId) {
          // && p.productId === action.payload.scent
          p.qty = p.qty + action.payload.qty;
          const price = action.payload.price * p.qty;
          p.price = Number(price.toFixed(2));
        }
      });
    },
    incrementItemByOne: (state, action: PayloadAction<SetQuantity>) => {
      state.value.forEach((p) => {
        if (p.productId === action.payload.productId) return (p.qty += 1);
      });
    },
    decrementItemByOne: (state, action: PayloadAction<SetQuantity>) => {
      state.value.forEach((p) => {
        if (p.productId === action.payload.productId) return (p.qty -= 1);
      });
    },
    emptyBasket: (state) => {
      state.value = [];
    },
  },
});

export const {
  addToBasket,
  removeItemFromBasket,
  updateItemInBasket,
  emptyBasket,
} = basketSlice.actions;

export const selectBasket = (state: RootState) => state.basket.value;

export default basketSlice.reducer;
