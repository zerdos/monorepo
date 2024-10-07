import { useSpeedy2 } from "./useArchive";

export const useDownload = (codeSpace: string, onlyReturn = false) => {
  console.log(
    `useDownload hook called with codeSpace: ${codeSpace}, onlyReturn: ${onlyReturn}`,
  );

  return async (): Promise<string | void> => {
    console.log("Starting download process");

    try {
      await useSpeedy2();
      console.log("useSpeedy2 completed");

      const url = `/live-cms/${codeSpace}.html`;
      console.log(`Fetching content from: ${url}`);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const content = await response.text();
      console.log(`Content fetched, length: ${content.length} characters`);

      if (onlyReturn) {
        console.log("Returning content without downloading");
        return content;
      }

      console.log("Creating Blob and initiating download");
      const blob = new Blob([content], { type: "text/html" });
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `${codeSpace}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);

      console.log("Download process completed");
      return;
    } catch (error) {
      console.error("Error in useDownload:", error);
      throw error;
    }
  };
};
