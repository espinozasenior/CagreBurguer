import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderReduxStore from "../../../../../../shared/utils/renderReduxStore";
import CreateNewOrder from "../containers/CreateNewOrder";


describe("HomeProductsScreen component", () => {

  describe("CreateNewOrden component", () => {
    beforeEach(() => {
      renderReduxStore(<CreateNewOrder />);
    });

    it("Podría mostrar el sidebar al hacer click en el botón para añadir", () => {
        expect(screen.getByRole("button")).toBeInTheDocument();
        userEvent.click(screen.getByRole("button"));
        expect(screen.getByText("Menú")).toBeInTheDocument();
    });

    it("Debería abrir y cerrar el sidebar", () => {
        const cancelText = "CANCELAR";
        expect(screen.queryByText(cancelText)).not.toBeInTheDocument();
        userEvent.click(screen.getByRole("button"));
        expect(screen.queryByText(cancelText)).toBeInTheDocument();
        userEvent.click(screen.getByText(cancelText));
        expect(screen.queryByText("Menú")).not.toBeInTheDocument();
    });
    
  });

});
