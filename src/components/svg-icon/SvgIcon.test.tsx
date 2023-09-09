import { render } from "@testing-library/react";

import { ReactComponent as InfoIcon } from "#/assets/svg/info.svg";

import SvgIcon from "./SvgIcon.component";

describe("SvgIcon component", () => {
  test("renders icon correctly", () => {
    const { getByTestId } = render(
      <SvgIcon Icon={InfoIcon} className="test-icon" />
    );
    const iconElement = getByTestId("svg-icon");

    expect(iconElement).toBeInTheDocument();
    expect(iconElement.classList.contains("icon")).toBe(true);
    expect(iconElement.classList.contains("transition-all")).toBe(true);
    expect(iconElement.classList.contains("test-icon")).toBe(true);
  });
});
