import { configureStore } from '@reduxjs/toolkit';
import customerReducer from "../reducers/CustomerSlice.ts";
import itemReducer from "../reducers/ItemSlice.ts";

const store = configureStore({
    reducer: {
        customers: customerReducer,
        items: itemReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;