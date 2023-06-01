import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Tree from "./Tree.component";
import store from "../../../app/store";

describe("Tree component", () => {
  it("renders the tree", () => {
    render(
      <Provider store={store}>
        <Tree />
      </Provider>,
    );

    expect(screen.queryByText(/atlas detector/i)).toBeInTheDocument();
    expect(screen.queryByText(/inner detector/i)).toBeInTheDocument();
  });
});
