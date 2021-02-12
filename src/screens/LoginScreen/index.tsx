import { RouteComponentProps } from "@reach/router";
import React, { FC } from "react";
import AuthenticationAccess from "./AuthenticationAccessApp";


const LoginScreen: FC<RouteComponentProps> = () => {
  return <AuthenticationAccess />;
};

export default LoginScreen;
