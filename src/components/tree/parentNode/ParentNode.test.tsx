import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import ParentNode from './ParentNode.component';
import type { ParentNodeProps } from './parentNode.types';
import store from '../../../app/store';

describe('ParentNode component', () => {
  const mockProps: ParentNodeProps = {
    name: 'Test Node',
    uid: '12345',
    modelState: 'notLoaded',
    nodeEnd: false,
    showChildren: true,
    children: <h1>Test child</h1>,
  };

  test('renders children correctly', () => {
    render(
      <Provider store={store}>
        <ParentNode {...mockProps} />
      </Provider>,
    );
    expect(screen.getByText(/Test child/i)).toBeInTheDocument();
  });
});
