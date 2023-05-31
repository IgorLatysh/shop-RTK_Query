import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import productsReducer from "./slices/products";
import cartReducer from "./slices/cart"
import {productsApi} from "./api/products";

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});

setupListeners(store.dispatch);

export default store;