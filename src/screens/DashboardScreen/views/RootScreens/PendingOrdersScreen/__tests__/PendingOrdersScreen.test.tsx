import PendingOrdersScreen from "..";
import renderReduxStore from "../../../../../../shared/utils/renderReduxStore";

describe("PendingOrdersScreen", () => {
  it("La lista de ordenes está vacio", () => {
    const { container } = renderReduxStore(<PendingOrdersScreen />);
    expect(container.querySelector(".pending-orders")).toBeNull();
  });
});
