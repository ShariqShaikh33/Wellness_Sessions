export const setUserKeyAction = (state,{payload})=>{
    const {key, value} = payload;
    state[key]=value;
}