import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/slices/user.slice";
import orderReducer from "@/slices/order.slice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        order: orderReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;