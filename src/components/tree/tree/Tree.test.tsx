import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../../../store/store";
import Tree from "./Tree.component";

describe("Tree component", () => {
  it("renders the tree", () => {
    render(
      <Provider store={store}>
        <Tree />
      </Provider>
    );

    expect(screen.queryByText(/atlas detector/i)).toBeInTheDocument();
    expect(screen.queryByText(/inner detector/i)).toBeInTheDocument();
  });
});
