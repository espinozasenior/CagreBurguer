import { screen } from "@testing-library/react";
import HistoryOrdersScreen from "..";
import renderReduxStore from "../../../../../../shared/utils/renderReduxStore";

describe("HistoryOrdersScreen component", () => {
  it("Podría estar sin ninguna tabla", () => {
    renderReduxStore(<HistoryOrdersScreen />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.queryByRole("table")).not.toBeInTheDocument();
  });
});
