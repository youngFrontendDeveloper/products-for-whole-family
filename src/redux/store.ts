import {configureStore} from "@reduxjs/toolkit";
import {productsApi} from "./api/products/productsApi.ts";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
    },

    devTools: import.meta.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([productsApi.middleware,]),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;