import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from "@reach/router";
import { render } from "@testing-library/react";

export default function renderRoutes(
  ui: React.ReactNode,
  { route = "/", history = createHistory(createMemorySource(route)) }
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    history,
  };
}
