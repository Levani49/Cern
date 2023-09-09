import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";

import ErrorHandler from "./ErrorHandler.component";

const MockedErrorHandler = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}): JSX.Element => <ErrorHandler>{children}</ErrorHandler>;

function ThrowErrorComponent({ test }: { test: boolean }) {
  if (test) {
    throw new Error("Test error");
  }

  return <h1>No Error</h1>;
}

describe("ErrorHandler component", () => {
  test("renders children when no errors occur", () => {
    // Wrap the ErrorThrowingComponent with the ErrorHandler component and IntlProvider
    render(
      <MockedErrorHandler>
        <ThrowErrorComponent test={false} />
      </MockedErrorHandler>
    );
    expect(screen.getByText("No Error")).toBeInTheDocument();
  });

  test("renders error text when an error occurs", async () => {
    render(
      <MockedErrorHandler>
        <ThrowErrorComponent test={true} />
      </MockedErrorHandler>
    );

    expect(
      await screen.findByText(
        "Something went wrong. We're working on it. Please refresh the page or try again later."
      )
    ).toBeInTheDocument();
  });
});
