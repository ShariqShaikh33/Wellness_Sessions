import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./User/userSlice"
import { apiSlice } from "./api"

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        user: userSlice,

    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(apiSlice.middleware),
})