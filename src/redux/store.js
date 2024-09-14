import { configureStore } from "@reduxjs/toolkit";
import sliceReducer, { pokemonApi } from "./sliceReducer";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer:{
        counter: sliceReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)