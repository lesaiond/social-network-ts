import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../utils/baseUrl";

interface IRegisterUserPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}

interface IRegisterUserResponse {
  status: number;
  user_id: number;
}
interface ILoginPayload {
  email: string;
  password: string;
}

interface IGetUserResponse {
  status: number;
  message: {
    mail: string;
    phone_number: string;
    user_id: number;
    name: string;
    reg_date: string;
    city: string;
  };
}

interface ILogionResponse extends IRegisterUserResponse {}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    registerUSer: builder.mutation<IRegisterUserPayload, IRegisterUserResponse>(
      {
        query: (payload) => ({
          url: "/registration",
          method: "POST",
          body: payload,
        }),
      }
    ),
    loginUser: builder.mutation<ILoginPayload, ILogionResponse>({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload,
      }),
    }),
    getUser: builder.query<IGetUserResponse, string>({
      query: (userid) => `/user?user_id=${userid}`
    })
  }),
});

export const {useRegisterUSerMutation, useLoginUserMutation, useGetUserQuery} = authApi