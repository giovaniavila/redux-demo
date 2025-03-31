import { configureStore } from "@reduxjs/toolkit";
import { cart } from "./modules/cart/reducer";
import { ICartState } from "./modules/cart/types";

const initialNameState = "Giovani";

export interface IState {
  cart: ICartState;
}

const showName = (state = initialNameState) => {
  return state;
};

export const store = configureStore({
  reducer: { cart, showName },
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
