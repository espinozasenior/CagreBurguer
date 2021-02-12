import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserAuthenticated } from "../../core/entities";

interface AuthenticationState {
  user : UserAuthenticated,
  loading: boolean,
  auth: boolean,
  error : {
    status : boolean,
    message : string
  }
}

/* ------------------------- Initial state of slice ------------------------- */

export const initialState : AuthenticationState = {
  user: {
      userId:0,
      name : "",
      token : "",
      logged: false,
  },
  auth: false,
  loading: true,
  error : {
    status : false,
    message : ""
  }
}

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    signInLoading(state) {
      state.loading = true;
    },
    signInSuccess(state,{payload}:PayloadAction<UserAuthenticated>) {
      state.auth = true;
      state.user = payload;
      state.loading = false;
    },
    signInFailed (state,{payload}:PayloadAction<{message:string}>) {
      state.loading = false;
      state.error = {
        status : true,
        message : payload.message
      }
    }
  },
});

export const { actions : authenticationActions, reducer : authentication } = authenticationSlice;
