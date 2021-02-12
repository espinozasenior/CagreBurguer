import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AuthenticationAccess from "..";
import renderReduxStore from "../../../../shared/utils/renderReduxStore";

describe("AuthenticationAccessApp", () => {

  it("Debe cambiar de opciones para iniciar sesión y registrarse", () => {
    renderReduxStore(<AuthenticationAccess />);

    userEvent.click(screen.getByText("Iniciar"));

    expect(screen.queryByText("Iniciar sesión")).toBeInTheDocument();

    userEvent.click(screen.getByText("Registrarme"));
    expect(screen.queryByText("Iniciar sesión")).not.toBeInTheDocument();

  });

  


});
