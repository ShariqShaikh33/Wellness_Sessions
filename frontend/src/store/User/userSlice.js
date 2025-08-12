import { createSlice } from "@reduxjs/toolkit";
import * as Actions from "./UserActions/index.js";
import { userInitialState } from "./userInitialState.js";

export const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers:{
        setUserKey: Actions.setUserKeyAction,
        setUser: Actions.setUserAction,
        resetUserState: Actions.resetUserStateAction,
    }
})

export const { setUserKey, setUser, resetUserState } = userSlice.actions;

export default userSlice.reducer;