import { Provider } from 'react-redux';
import { render, screen, fireEvent, act } from '@testing-library/react';

import store from '../../../app/store';
import FlyOverlay from './FlyGraph.component';
import { setDroneMode, setFlyModalState } from '../../../features/camera/cameraSlice';

describe('FlyOverlay component', () => {
  test('renders without errors', () => {
    render(
      <Provider store={store}>
        <FlyOverlay />
      </Provider>,
    );
    expect(screen.queryByText(/Press/i)).not.toBeInTheDocument();
  });

  test('renders modal when in free fly', () => {
    render(
      <Provider store={store}>
        <FlyOverlay />
      </Provider>,
    );

    act(() => {
      store.dispatch(setDroneMode('fly'));
      store.dispatch(setFlyModalState(true));
    });

    expect(screen.getByText(/start/i)).toBeInTheDocument();
  });

  test('renders modal after choosing fly mode', () => {
    render(
      <Provider store={store}>
        <FlyOverlay />
      </Provider>,
    );

    act(() => {
      store.dispatch(setDroneMode('fly'));
      store.dispatch(setFlyModalState(true));
    });

    fireEvent.click(screen.getByText(/Click anywhere to start/i));
    expect(store.getState().camera.showFlyModal).toBe(false);
  });

  test('hides modal after click', () => {
    store.dispatch(setFlyModalState(true));
    render(
      <Provider store={store}>
        <FlyOverlay />
      </Provider>,
    );

    expect(screen.getByText(/Click anywhere to start/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('presentation'));
    expect(store.getState().camera.showFlyModal).toBe(false);
    expect(screen.queryByText(/Click anywhere to start/i)).not.toBeInTheDocument();
  });
});
