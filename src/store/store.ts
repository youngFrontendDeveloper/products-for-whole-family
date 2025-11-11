import {configureStore} from "@reduxjs/toolkit";
import {productsApi} from "../features/products/productsApi.ts";
import productsReducer from "../features/products/productsSlice.ts";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        products: productsReducer,
    },

    devTools: import.meta.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([productsApi.middleware,]),
})

store.subscribe(() => {
    const state = store.getState();
    const localProducts = state.products.localProducts;
    localStorage.setItem('localProducts', JSON.stringify(localProducts));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;