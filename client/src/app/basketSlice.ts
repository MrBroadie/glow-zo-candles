import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketProduct } from "../interfaces/basketProductInterface";
import { RootState } from "./store";

interface BasketState {
  value: BasketProduct[];
}

interface UpdateQuantity {
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
    updateItemWhenAddToBasket: (
      state,
      action: PayloadAction<UpdateQuantity>
    ) => {
      state.value.forEach((p) => {
        if (p.productId === action.payload.productId) {
          // && p.productId === action.payload.scent
          p.qty = p.qty + action.payload.qty;
          const price = action.payload.price * p.qty;
          p.price = Number(price.toFixed(2));
        }
      });
    },
    updateItemInBasket: (state, action: PayloadAction<UpdateQuantity>) => {
      state.value.forEach((p) => {
        if (p.productId === action.payload.productId) {
          // && p.productId === action.payload.scent
          console.log(action.payload);
          p.qty = p.qty + action.payload.qty;
          const price = action.payload.price * p.qty;
          p.price = Number(price.toFixed(2));
        }
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
  updateItemWhenAddToBasket,
  updateItemInBasket,
  emptyBasket,
} = basketSlice.actions;

export const selectBasket = (state: RootState) => state.basket.value;

export default basketSlice.reducer;
