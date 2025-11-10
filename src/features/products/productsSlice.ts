import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {IProduct} from "./types.ts";
import type {RootState} from "../../store/store.ts";

export interface IProductsState {
    apiProducts: IProduct[];
    localProducts: IProduct[];
    selectedProduct: IProduct | null;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const savedLocalProducts = JSON.parse(localStorage.getItem('localProducts') || '[]');

const initialState: IProductsState = {
    apiProducts: [],
    localProducts: savedLocalProducts,
    selectedProduct: null,
    status: "idle",
    error: null,
}

export const fetchProducts = createAsyncThunk<IProduct[]>(
    'products/fetchProducts',
    async (_, thunkAPI) => {
        try {
            const res = await fetch('https://fakestoreapi.com/products');

            if (!res.ok) {
                // можно вернуть rejectWithValue, если хочешь детальнее обрабатывать ошибки
                return thunkAPI.rejectWithValue(`HTTP error ${res.status}`);
            }

            const data = await res.json();
            return data as IProduct[];
        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
);

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        selectProduct(state, action: PayloadAction<IProduct | null>) {
            state.selectedProduct = action.payload;
        },

        deleteProduct(state, action: PayloadAction<number>) {
            state.localProducts = state.localProducts.filter(product => product.id !== action.payload)

            if (state.selectedProduct?.id === action.payload) {
                state.selectedProduct = null;
            }
        },

        createNewProduct(state, action: PayloadAction<IProduct>) {
            state.localProducts.unshift(action.payload)
        },

        likeProduct(state, action: PayloadAction<number>) {
            const product = state.localProducts.find(p => p.id === action.payload);
            if (product) {
                product.isLiked = !product.isLiked;
            }
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.apiProducts = action.payload;

                // если localProducts пуст, заполняем его товарами с API
                if (state.localProducts.length === 0) {
                    state.localProducts = action.payload;
                }
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Ошибка загрузки товаров';
            });
    }

})

export const {selectProduct, deleteProduct, createNewProduct, likeProduct} = productsSlice.actions
export default productsSlice.reducer

export const selectAllProducts = (state: RootState) => state.products.localProducts;
export const selectLikedProducts = (state: RootState) =>
    state.products.localProducts.filter((p) => p.isLiked);

export const selectSelectedProduct = (state: RootState) =>
    state.products.selectedProduct;

