import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { showRendererStats } from "../../../features/global/globalsSlice";
import store from "../../../store/store";
import Stats from "./Stats.component";

test("renders stats component", () => {
  render(
    <Provider store={store}>
      <Stats />
    </Provider>
  );

  expect(screen.queryByText(/TRIANGLES:/i)).not.toBeInTheDocument();
  act(() => {
    store.dispatch(showRendererStats(true));
  });
  expect(screen.queryByText(/TRIANGLES:/i)).toBeInTheDocument();
  act(() => {
    store.dispatch(showRendererStats(false));
  });
  expect(screen.queryByText(/TRIANGLES:/i)).not.toBeInTheDocument();
});
