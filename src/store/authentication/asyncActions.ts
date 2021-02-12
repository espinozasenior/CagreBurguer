import { Dispatch } from "@reduxjs/toolkit";
import { Auth } from "../../core/entities";
import AuthService from "../../core/services/AuthService/AuthService";
import { authenticationActions } from "./authenticationSlice";

export const signIn = (props: Auth) => async (dispatch: Dispatch) => {
  dispatch(authenticationActions.signInLoading());

  const authService = new AuthService();
  const request = await authService.signIn(props);
  
  if(request.logged) dispatch(authenticationActions.signInSuccess(request));
  else dispatch(authenticationActions.signInFailed({message:""}));

};
