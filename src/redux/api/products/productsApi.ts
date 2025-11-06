import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {IProduct,} from "../../../types.ts";

// export interface IArg {
//     searchWord: string;
//     limit: number;
//     skip: number;
// }

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], []>({
            query: () => ({
                url: import.meta.env.VITE_PRODUCTS_URL,
            })
        }),

        getProductById: builder.query<IProduct, string>({
            query: (id) => `${import.meta.env.VITE_PRODUCTS_URL}/${id}`,
        }),
    })
})

export const {useGetProductsQuery, useGetProductByIdQuery} = productsApi;
//
//
// import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
// import type {IProduct, IProducts} from "../../../types.ts";
//
// export interface IArg {
//     searchWord: string;
//     limit: number;
//     skip: number;
// }
//
// export const productsApi = createApi({
//     reducerPath: "productsApi",
//     baseQuery: fetchBaseQuery({
//         baseUrl: import.meta.env.VITE_BASE_URL,
//     }),
//     tagTypes: ["Products", "Product"],
//     endpoints: (builder) => ({
//         getProducts: builder.query<IProducts, IArg>({
//             query: ({ limit, skip}) => ({
//                 url: import.meta.env.VITE_PRODUCTS_URL,
//                 params: {
//                     // q: searchWord,
//                     limit: limit,
//                     skip: skip,
//                 },
//             })
//         }),
//
//         getProductById: builder.query<IProduct, string>({
//             query: (id) => `${import.meta.env.VITE_PRODUCTS_URL}/${id}`,
//         }),
//     })
// })
//
// export const {useGetProductsQuery, useGetProductByIdQuery} = productsApi;