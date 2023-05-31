import { Component, ErrorInfo, ReactNode } from 'react';

import { ReactComponent as ArrowPathIcon } from '../../assets/svg/arrowPathIcon.svg';

export type ErrorHandlerProps = {
  children: ReactNode;
};

export type ErrorHandlerState = {
  hasError: boolean;
};

function ErrorText(): JSX.Element {
  return (
    <div className="z-9999 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center flex flex-col justify-center items-center gap-6 text-white max-w-[350px]">
      <h1 className="text-white text-3xl">
        Oops! Something went wrong. We&apos;re working to fix it.
      </h1>
      <div className="py-3 px-4 bg-green rounded-md flex items-center gap-2 mt-12">
        <button onClick={(): void => location.reload()}>Refresh</button>
        <ArrowPathIcon className="w-6 h-6 text-white" />
      </div>
    </div>
  );
}

export default class ErrorHandler extends Component<ErrorHandlerProps, ErrorHandlerState> {
  state: ErrorHandlerState = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error): ErrorHandlerState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
  }

  render(): ReactNode | ReactNode[] {
    if (this.state.hasError) {
      return <ErrorText />;
    }

    return this.props.children;
  }
}
