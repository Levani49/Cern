import matchers from "@testing-library/jest-dom/matchers";
import { afterEach, expect } from "vitest";

import { cleanup } from "@testing-library/react";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

class MockIntersectionObserver {
  // eslint-disable-next-line #/typesscript-eslint/no-unused-vars
  constructor(callback: unknown, options?: unknown) {
    //
  }

  observe(): void {
    //
  }

  unobserve(): void {
    //
  }

  disconnect(): void {
    //
  }
}

// eslint-disable-next-line #/typesscript-eslint/ban-ts-comment
//@ts-ignore
(global as unknown).IntersectionObserver = MockIntersectionObserver;
