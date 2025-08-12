import { LOGIN_URL } from "../../../constants/api";
import { apiSlice } from "../../api";

const loginUserApi = apiSlice.injectEndpoints({
    endpoints: (build)=>({
        loginUser: build.mutation({
            query: (body)=>({
                url: LOGIN_URL,
                method: "POST",
                body,
            }),
            invalidatesTags: ["User"],
        })
    })
})

export const { useLoginUserMutation } = loginUserApi;