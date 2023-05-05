import { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { render, screen } from '@testing-library/react';

import ErrorHandler from './ErrorHandler.component';
import { messages } from './errorHandlerMockedData';

const TEST_CASE = true;

const MockedErrorHandler = ({ children }: { children: ReactNode | ReactNode[] }): JSX.Element => (
  <IntlProvider locale="en" messages={messages}>
    <ErrorHandler>{children}</ErrorHandler>
  </IntlProvider>
);

function ThrowErrorComponent(): JSX.Element {
  if (TEST_CASE) {
    throw new Error('Test error');
  }

  return <h1>Test</h1>;
}

describe('ErrorHandler component', () => {
  test('renders children when no errors occur', () => {
    // Wrap the ErrorThrowingComponent with the ErrorHandler component and IntlProvider
    render(
      <MockedErrorHandler>
        <h1>test</h1>
      </MockedErrorHandler>,
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('renders error text when an error occurs', async () => {
    render(
      <MockedErrorHandler>
        <ThrowErrorComponent />
      </MockedErrorHandler>,
    );

    expect(await screen.findByText('Error occurred')).toBeInTheDocument();
  });
});
