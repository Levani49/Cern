import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';

import ErrorHandler from './ErrorHandler.component';

const MockedErrorHandler = ({ children }: { children: ReactNode | ReactNode[] }): JSX.Element => (
  <ErrorHandler>{children}</ErrorHandler>
);

function ThrowErrorComponent({ test }: { test: boolean }): JSX.Element {
  if (test) {
    throw new Error('Test error');
  }

  return <h1>No Error</h1>;
}

describe('ErrorHandler component', () => {
  test('renders children when no errors occur', () => {
    // Wrap the ErrorThrowingComponent with the ErrorHandler component and IntlProvider
    render(
      <MockedErrorHandler>
        <ThrowErrorComponent test={false} />
      </MockedErrorHandler>,
    );
    expect(screen.getByText('No Error')).toBeInTheDocument();
  });

  test('renders error text when an error occurs', async () => {
    render(
      <MockedErrorHandler>
        <ThrowErrorComponent test={true} />
      </MockedErrorHandler>,
    );

    expect(
      await screen.findByText("Oops! Something went wrong. We're working to fix it."),
    ).toBeInTheDocument();
  });
});
