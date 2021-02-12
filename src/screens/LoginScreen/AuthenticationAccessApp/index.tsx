import React, { FC } from "react";
import RootWrapper, { FormAccessWrapper } from "./components/RootWrapper";
import MainHeaderBanner from "./components/MainHeaderBanner";
import AuthenticationTabOptions, {
  AuthenticationOption,
} from "./components/AuthenticationTabOptions";
import SignInFormContainer from "./containers/SignInFormContainer";
import SignUpFormContainer from "./containers/SignUpFormContainer";


const AuthenticationAccess: FC = () => {
  return (
    <RootWrapper>
      <MainHeaderBanner />
      <FormAccessWrapper>
        <AuthenticationTabOptions>
          <AuthenticationOption title="Iniciar">
              <SignInFormContainer/>
          </AuthenticationOption>
          <AuthenticationOption title="Registrarme">
            <SignUpFormContainer/>
          </AuthenticationOption>
        </AuthenticationTabOptions>
      </FormAccessWrapper>
    </RootWrapper>
  );
};

export default AuthenticationAccess;
