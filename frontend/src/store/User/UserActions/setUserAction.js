export const setUserAction = (state, {payload})=>{
    const {value} = payload;
    Object.assign(state, value);
}