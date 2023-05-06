import { test } from 'vitest';
import { PerspectiveCamera, Vector3 } from 'three';
import Rocket from './rocket.model';

// Mock the Camera class
class MockCamera extends PerspectiveCamera {
  position = new Vector3();
  lookAt = jest.fn();
}

test('Rocket class', async () => {
  test('prepare() method', () => {
    const rocket = new Rocket();
    const camera = new MockCamera(75, 16 / 9, 0.1, 1000);

    rocket.prepare(camera);

    expect(camera.position).toEqual(rocket.configuration.startingPoint);
    expect(camera.lookAt).toHaveBeenCalledWith(0, 0, 0);
  });

  test('start() and stop() methods', () => {
    const rocket = new Rocket();
    const camera = new MockCamera(75, 16 / 9, 0.1, 1000);
    const callback = jest.fn();

    // Start the rocket animation and then stop it
    rocket.start(camera, callback);
    rocket.stop();

    // Check if the animation stopped
    expect(rocket['animationRef']).toBeUndefined();
  });

  test('start() method with a callback', async () => {
    const rocket = new Rocket();
    const camera = new MockCamera(75, 16 / 9, 0.1, 1000);
    const callback = jest.fn();

    // Start the rocket animation with a callback
    rocket.start(camera, callback);

    // Wait for the animation to complete and the callback to be called
    await new Promise((resolve) => setTimeout(resolve, 4000));

    // Check if the callback was called
    expect(callback).toHaveBeenCalled();
  });
});
