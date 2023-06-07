import { PerspectiveCamera, Vector3 } from "three";
import { test } from "vitest";

import Zoom from "./zoom.model";

// Mock the Camera class
class MockCamera extends PerspectiveCamera {
  position = new Vector3();
  fov = 75;
  lookAt = jest.fn();
  updateProjectionMatrix = jest.fn();
}

test("Zoom class", async () => {
  test("start() and stop() methods", () => {
    const zoom = new Zoom();
    const camera = new MockCamera(75, 16 / 9, 0.1, 1000);

    // Start the zoom animation and then stop it
    zoom.start(camera);
    zoom.stop(camera);

    // Check if the animation stopped
    expect(zoom["animationRef"]).toBeUndefined();
    expect(camera.position).toEqual(new Vector3(3, 3, 3));
    expect(camera.fov).toEqual(75);
    expect(camera.lookAt).toHaveBeenCalledWith(0, 0, 0);
    expect(camera.updateProjectionMatrix).toHaveBeenCalled();
  });

  test("start() method with a callback", async () => {
    const zoom = new Zoom();
    const camera = new MockCamera(75, 16 / 9, 0.1, 1000);
    const callback = jest.fn();

    // Start the zoom animation with a callback
    zoom.start(camera, callback);

    // Wait for the animation to complete and the callback to be called
    await new Promise((resolve) => setTimeout(resolve, 6000));

    // Check if the callback was called
    expect(callback).toHaveBeenCalled();
  });
});
