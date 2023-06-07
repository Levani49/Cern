import { PerspectiveCamera, Vector3 } from "three";
import { test } from "vitest";

import Helix from "./helix.model";

// Mock the Camera class
class MockCamera extends PerspectiveCamera {
  position = new Vector3();
  lookAt = jest.fn();
}

test("Helix class", async () => {
  test("start() and stop() methods", () => {
    const helix = new Helix();
    const camera = new MockCamera(75, 16 / 9, 0.1, 1000);
    const callback = jest.fn();

    // Start the helix-style animation and then stop it
    helix.start(camera, callback);
    helix.stop();

    // Check if the animation stopped
    expect(helix["animationRef"]).toBeUndefined();
  });

  test("start() method with a callback", async () => {
    const helix = new Helix();
    const camera = new MockCamera(75, 16 / 9, 0.1, 1000);
    const callback = jest.fn();

    // Start the helix-style animation with a callback
    helix.start(camera, callback);

    // Wait for the animation to complete and the callback to be called
    await new Promise((resolve) => setTimeout(resolve, 4000));

    // Check if the callback was called
    expect(callback).toHaveBeenCalled();
  });
});
