import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";
import costReducer from "./costSlice";
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    cost: costReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
