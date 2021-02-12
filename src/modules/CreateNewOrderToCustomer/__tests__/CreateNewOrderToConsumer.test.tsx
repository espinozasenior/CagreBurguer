import { cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderReduxStore from "../../../shared/utils/renderReduxStore";
import { ordersActions } from "../../../store/orders/ordersSlice";
import CreateNewNameConsumer from "../containers/CreateNewNameConsumer";

afterEach(cleanup);

describe("CreateNewOrderToConsumer", () => {
  
  let createNewName: any;

  beforeEach(() => {
    createNewName = renderReduxStore(<CreateNewNameConsumer />);
  });


  it("Podría abrir el modal para crear el nombre del usuario", async () => {
    createNewName.dispatch(ordersActions.activeCreatingOrder());
    await waitFor(() => {
      expect(screen.getByText(/nombre/i)).toBeInTheDocument();
    });
  });


  it("Abrir y cancelar el modal", async () => {
    createNewName.dispatch(ordersActions.activeCreatingOrder());

    const modal = await waitFor(() => screen.getByRole("alert"));
    expect(modal).toBeInTheDocument();

    userEvent.click(screen.getByText(/Cancelar/i));
    expect(modal).not.toBeInTheDocument();
    expect(screen.queryByRole("button")).toBeNull();
  });


  it("Debería Ingresar el nombre y continuar cerrando la alerta", async () => {
    createNewName.dispatch(ordersActions.activeCreatingOrder());

    userEvent.type(
      screen.getByTestId("input-name"),
      "Mark"
    );
    expect(screen.getByTestId("input-name")).toHaveValue("Mark")

    userEvent.click(screen.getByText("Continuar"))

    expect( screen.queryByRole("alert")).toBeNull();


  });
  
});
