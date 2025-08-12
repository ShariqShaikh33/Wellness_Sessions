import { REGSTER_URL } from "../../../constants/api";
import { apiSlice } from "../../api";

const registerUserApi = apiSlice.injectEndpoints({
    endpoints: (build)=>({
        registerUser: build.mutation({
            query: (body)=>({
                url: REGSTER_URL,
                method: "POST",
                body,
            }),
            invalidatesTags: ["User"],
        })
    })
})

export const { useRegisterUserMutation } = registerUserApi;