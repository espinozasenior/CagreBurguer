import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import BaseButton from "../../../../../shared/components/BaseButton";
import { signIn } from "../../../../../store/authentication/asyncActions";
import {FormFields,FormSubmitWrapper,InputForm } from "../../components/CommonForm";

interface LoginUser {
  email: string;
  password: string;
}

const SignInFormContainer = () => {
  const { register, handleSubmit } = useForm<LoginUser>();
  const dispatch = useDispatch(); 
  const onSubmit = (payload: LoginUser) : void => {
    dispatch(signIn(payload));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormFields>
        <InputForm
          ref={register({ required: true })} name="email" type="email" placeholder="Correo electrónico"
        />
        <InputForm
          ref={register({required:true})} name="password" type="password" placeholder="Contraseña"
        />
      </FormFields>
      <FormSubmitWrapper> 
        <BaseButton as="input" type="submit" value="Iniciar sesión" /> 
      </FormSubmitWrapper>
    </form>
  );
};

export default SignInFormContainer;
