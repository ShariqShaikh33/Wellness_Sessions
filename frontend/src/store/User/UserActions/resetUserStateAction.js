import { userInitialState } from "../userInitialState";

export const resetUserStateAction = (state)=>{
    Object.assign(state, userInitialState);
}