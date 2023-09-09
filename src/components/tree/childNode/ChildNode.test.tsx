import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "#/store/store";

import ChildNode, { ChildNodeProps } from "./ChildNode";

describe("ChildNode component", () => {
  const mockProps: ChildNodeProps = {
    name: "Test Node",
    uid: "12345",
    modelState: "notLoaded",
    nodeEnd: false,
  };

  test("renders node name correctly", () => {
    render(
      <Provider store={store}>
        <ChildNode {...mockProps} />
      </Provider>
    );
    expect(screen.getByText(/Test Node/i)).toBeInTheDocument();
  });
});
