import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { GEOMETRY_MENU_TREE } from "../../../constants/geometryTree";
import store from "../../../store/store";
import RecursiveTree from "./RecursiveTree.component";

describe("RecursiveTree", () => {
  it("should render the tree correctly", () => {
    render(
      <Provider store={store}>
        <RecursiveTree tree={GEOMETRY_MENU_TREE} />
      </Provider>
    );

    const parent = screen.getByText("atlas detector");

    expect(parent).toBeInTheDocument();
  });
});
