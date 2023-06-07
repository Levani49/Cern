import { Component, ErrorInfo, ReactNode } from "react";

import Button from "@components/button/Button.component";
import TransitionModal from "@components/transition-modal/transition.modal";

export type ErrorHandlerProps = {
  children: ReactNode;
};

export type ErrorHandlerState = {
  hasError: boolean;
};

function ErrorText(): JSX.Element {
  return (
    <TransitionModal open={true} title="ERROR">
      <div className="mt-8 flex flex-col items-center justify-center gap-8 pb-2">
        <p className="text-center text-xl text-white">
          Something went wrong. We&apos;re working on it. Please refresh the
          page or try again later.
        </p>
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
    hasError: false
  };

  static getDerivedStateFromError(_: Error): ErrorHandlerState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
  }

  render(): ReactNode | ReactNode[] {
    if (this.state.hasError) {
      return <ErrorText />;
    }

    return this.props.children;
  }
}
