import React, { FC } from "react";
import { navigate, Redirect, RouteComponentProps } from "@reach/router";
import BaseButton from "../../shared/components/BaseButton";
import useAuthenticate from "../../hooks/useAuthenticate";
import { Wrapper } from "./index.styles";

const GetStartedScreen: FC<RouteComponentProps> = () => {
  const { isAuth } = useAuthenticate();
  const onStart = () => {
    localStorage.setItem("started", "started");
    navigate("/login");
  };

  if (isAuth) return <Redirect to="/dashboard" noThrow />;
  if (!!localStorage.getItem("started")) return <Redirect to="/login" noThrow />;

  return (
    <Wrapper>
      <div className="banner">
        <img src="/images/breakfast.svg" alt="breakfast" />
        <h1 className="banner__title">Comida rápida</h1>
      </div>
      <div className="message">
        <p className="pb-5">
          Bienvenido, esta pantalla solo aparecerá una vez, una vez ingresado tus datos podrás acceder al panel de control.
        </p>
        <BaseButton onClick={onStart}>Comenzar</BaseButton>
      </div>
    </Wrapper>
  );
};

export default GetStartedScreen;
