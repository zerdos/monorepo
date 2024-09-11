import "@testing-library/jest-dom";
import { TextDecoder, TextEncoder } from "text-encoding";
import { Mock, vi } from "vitest";

// Add type definitions for ResizeObserver
declare global {
  interface Global {
    ResizeObserver: Mock;
  }

  var TextEncoder: typeof TextEncoder;
  var TextDecoder: typeof TextDecoder;
}

globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

globalThis.TextEncoder = TextEncoder;
globalThis.TextDecoder = TextDecoder;

process.env.VI_TEST = "true";
