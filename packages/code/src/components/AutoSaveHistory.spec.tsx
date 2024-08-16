import { fireEvent, screen, waitFor } from "@testing-library/react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import type * as Monaco from "monaco-editor";
import { beforeEach, describe, expect, it, vi } from "vitest";
import AutoSaveHistory from "./AutoSaveHistory";

// Mock the useVirtualizer hook
vi.mock("@tanstack/react-virtual", () => ({
  useVirtualizer: vi.fn().mockReturnValue({
    getVirtualItems: () => [
      { index: 0, key: "0", size: 150, start: 0 },
      { index: 1, key: "1", size: 150, start: 150 },
    ],
    getTotalSize: () => 300,
  }),
}));

describe("AutoSaveHistory", () => {
  const monaco = (globalThis as unknown as { monaco: typeof Monaco }).monaco = {
    editor: {
      createDiffEditor: vi.fn().mockReturnValue({
        setModel: vi.fn(),
        dispose: vi.fn(),
      }),
      createModel: vi.fn(),
    },
  } as unknown as typeof Monaco;

  // Mock the fetch function
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          { timestamp: 1625097600000, code: "console.log(\"Version 1\");" },
          { timestamp: 1625184000000, code: "console.log(\"Version 2\");" },
        ]),
    })
  ) as unknown as typeof fetch;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderWithProvider = (ui: React.ReactElement) => {
    return render(
      <div
        ref={(el) =>
          el
          && (el.getBoundingClientRect = () => ({ height: 1000 } as DOMRect))}
      >
        {ui}
      </div>,
    );
  };

  const mockOnRestore = vi.fn();
  const mockOnClose = vi.fn();

  it("renders loading state initially", async () => {
    renderWithProvider(
      <AutoSaveHistory
        codeSpace="test"
        onRestore={mockOnRestore}
        onClose={mockOnClose}
      />,
    );
    await screen.findByText("Loading versions...");
  });

  it("fetches and displays versions", async () => {
    renderWithProvider(
      <AutoSaveHistory
        codeSpace="test"
        onRestore={mockOnRestore}
        onClose={mockOnClose}
      />,
    );
    await screen.findByText("Jul 1, 2021, 12:00 AM");
    expect(screen.getByText("Jul 2, 2021, 12:00 AM")).toBeTruthy();
  });

  it("calls onRestore when restore button is clicked", async () => {
    renderWithProvider(
      <AutoSaveHistory
        codeSpace="test"
        onRestore={mockOnRestore}
        onClose={mockOnClose}
      />,
    );
    const versionButton = await screen.findByText("Jul 1, 2021, 12:00 AM");
    fireEvent.click(versionButton);
    const restoreButton = await screen.findByText("Restore Selected Version");
    fireEvent.click(restoreButton);
    await waitFor(() => {
      expect(mockOnRestore).toHaveBeenCalledWith("console.log(\"Version 1\");");
    });
  });

  it("calls onClose when close button is clicked", async () => {
    renderWithProvider(
      <AutoSaveHistory
        codeSpace="test"
        onRestore={mockOnRestore}
        onClose={mockOnClose}
      />,
    );
    const closeButton = await screen.findByText("Close");
    fireEvent.click(closeButton);
    await waitFor(() => {
      expect(mockOnClose).toHaveBeenCalled();
    });
  });

  it("updates diff editor when a version is selected", async () => {
    renderWithProvider(
      <AutoSaveHistory
        codeSpace="test"
        onRestore={mockOnRestore}
        onClose={mockOnClose}
      />,
    );
    const versionButton = await screen.findByText("Jul 1, 2021, 12:00 AM");
    fireEvent.click(versionButton);
    await waitFor(() => {
      expect(monaco.editor.createModel).toHaveBeenCalledTimes(2);
      expect(monaco.editor.createDiffEditor).toHaveBeenCalled();
    });
  });
});
