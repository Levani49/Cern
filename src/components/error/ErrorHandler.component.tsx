import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { Component, ErrorInfo, ReactNode } from 'react';
import { useIntl } from 'react-intl';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

function ErrorText(): JSX.Element {
  const intl = useIntl();
  const errorMessage = intl.formatMessage({ id: 'errorBoundary.text' });
  const reloadMessage = intl.formatMessage({ id: 'errorBoundary.refresh' });

  return (
    <div className="z-9999 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center flex flex-col justify-center items-center gap-6 text-white max-w-[350px]">
      <h1 className="text-white text-3xl">{errorMessage}</h1>
      <div className="py-3 px-4 bg-green rounded-md flex items-center gap-2 mt-12">
        <button onClick={(): void => location.reload()}>{reloadMessage}</button>
        <ArrowPathIcon className="w-6 h-6 text-white" />
      </div>
    </div>
  );
}

export default class ErrorHandler extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error): State {
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
