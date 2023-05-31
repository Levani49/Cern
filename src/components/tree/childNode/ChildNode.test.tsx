import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import ChildNode, { ChildNodeProps } from './ChildNode.component';
import store from '../../../app/store';

describe('ChildNode component', () => {
  const mockProps: ChildNodeProps = {
    name: 'Test Node',
    uid: '12345',
    modelState: 'notLoaded',
    nodeEnd: false,
  };

  test('renders node name correctly', () => {
    render(
      <Provider store={store}>
        <ChildNode {...mockProps} />
      </Provider>,
    );
    expect(screen.getByText(/Test Node/i)).toBeInTheDocument();
  });
});
