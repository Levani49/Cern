import { render, screen } from '@testing-library/react';
import RecursiveTree from './RecursiveTree.component';
import { GEOMETRY_MENU_TREE } from '../../../constants/geometryTree';
import { Provider } from 'react-redux';
import store from '../../../app/store';

describe('RecursiveTree', () => {
  it('should render the tree correctly', () => {
    render(
      <Provider store={store}>
        <RecursiveTree tree={GEOMETRY_MENU_TREE} />
      </Provider>,
    );

    const parent = screen.getByText('atlas detector');

    expect(parent).toBeInTheDocument();
  });
});
