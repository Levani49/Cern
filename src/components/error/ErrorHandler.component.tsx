import { Component, ErrorInfo, ReactNode } from "react";

import Button from "@components/button/Button.component";
import TransitionModal from "@components/transition-modal/transition.modal";

export type ErrorHandlerProps = {
  children: ReactNode;
};

export type ErrorHandlerState = {
  hasError: boolean;
  errorMessage: string;
};

function ErrorText({ message }: { message: string }): JSX.Element {
  return (
    <TransitionModal open={true} title="ERROR">
      <div className="mt-8 flex flex-col items-center justify-center gap-8 pb-2">
        <p className="text-center text-xl text-white">
          Something went wrong. We&apos;re working on it. Please refresh the page or
          try again later.
        </p>
        <p className="text-center text-xs text-red-500">{message}</p>
        <Button className="px-6 py-2" onClick={(): void => location.reload()}>
          Refresh
        </Button>
      </div>
    </TransitionModal>
  );
}

export default class ErrorHandler extends Component<
  ErrorHandlerProps,
  ErrorHandlerState
> {
  state: ErrorHandlerState = {
    hasError: false,
    errorMessage: "" // Add a new state property to hold the error message
  };

  static getDerivedStateFromError(error: Error): ErrorHandlerState {
    return {
      hasError: true,
      errorMessage: error.message // Set the error message in the state
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
  }

  render(): ReactNode | ReactNode[] {
    if (this.state.hasError) {
      return <ErrorText message={this.state.errorMessage} />;
    }

    return this.props.children;
  }
}
