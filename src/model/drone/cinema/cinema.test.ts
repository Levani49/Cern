import { test } from 'vitest';
import { Vector3, PerspectiveCamera } from 'three';
import Cinema from './cinema.model';

// Mock the Camera class
class MockCamera extends PerspectiveCamera {
  position = new Vector3();
  lookAt = jest.fn();
}

test('Cinema class', async () => {
  test('start() and stop() methods', () => {
    const cinema = new Cinema();
    const camera = new MockCamera();
    const callback = jest.fn();

    // Start the cinema-style animation and then stop it
    cinema.start(camera, callback);
    cinema.stop();

    // Check if the animation stopped
    expect(cinema['animationRef']).toBeUndefined();
  });

  test('start() method with a callback', async () => {
    const cinema = new Cinema();
    const camera = new MockCamera();
    const callback = jest.fn();

    // Start the cinema-style animation with a callback
    cinema.start(camera, callback);

    // Wait for the animation to complete and the callback to be called
    await new Promise((resolve) => setTimeout(resolve, 4000));

    // Check if the callback was called
    expect(callback).toHaveBeenCalled();
  });
});
