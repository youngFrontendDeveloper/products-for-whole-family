import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {IProduct,} from "./types.ts";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
    }),
    tagTypes: ['Products'], // чтобы можно было обновлять кэш
    endpoints: (builder) => ({

        getProductById: builder.query<IProduct, string>({
            query: (id) => `${import.meta.env.VITE_PRODUCTS_URL}/${id}`,
        }),
    })
})

export const {useGetProductByIdQuery} = productsApi;

