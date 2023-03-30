import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";
import costReducer from "./costSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    cost: costReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
