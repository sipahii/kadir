import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../all-products/allproductsApi/allProductsApi';
import textEditorSlice from '../productDescriptionWrapper/textEditorSlice';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        textEditorData: textEditorSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})