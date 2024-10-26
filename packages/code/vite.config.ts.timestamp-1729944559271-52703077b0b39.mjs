// vite.config.ts
import path from "path";
import { defineConfig } from "file:///home/z/spike.land/.yarn/__virtual__/vite-virtual-d1836b2cec/2/.yarn/berry/cache/vite-npm-5.4.10-30d2e3a4e2-10c0.zip/node_modules/vite/dist/node/index.js";
import react from "@XX/vitejs/plugin-react-swc";

// src/@/lib/importmap-utils.ts
var oo = {
  "/@/": "/@/",
  "@emotion/react/jsx-runtime": "/emotionJsxRuntime.mjs",
  "react/jsx-runtime": "/jsx.mjs",
  "react-dom/server": "/reactDomServer.mjs",
  "react-dom/client": "/reactDomClient.mjs",
  "@emotion/react": "/emotion.mjs",
  "react": "/reactMod.mjs",
  "framer-motion": "/motion.mjs",
  "react-dom": "/reactDom.mjs"
};
var importMap = { imports: oo };

// vite.config.ts
import fs from "fs";
var __vite_injected_original_dirname = "/home/z/spike.land/packages/code";
var externalFiles = fs.readdirSync(path.resolve(__vite_injected_original_dirname, "./src/@/external"));
var externalRollup = externalFiles.map((file) => {
  return {
    type: "external",
    file: "/@/external/" + file
  };
}).map(
  (file) => {
    const fileParts = file.file.split(".");
    fileParts.pop();
    fileParts.push("mjs");
    file.file = fileParts.join(".");
    return file;
  }
);
var externalAliases = externalRollup.reduce(
  (acc, file) => {
    const fileParts = file.file.split(".");
    fileParts.pop();
    file.file = fileParts.join(".");
    file.file = file.file.replace("/@/external/", "@/external/");
    acc[file.file] = "/" + file.file + ".mjs";
    return acc;
  },
  {}
);
var rollupExternal = Object.values(externalAliases);
var importMapProxy = {};
Object.entries(importMap.imports).forEach(([key, value]) => {
  importMapProxy[key] = {
    target: "https://testing.spike.land" + value,
    changeOrigin: true,
    rewrite: (path2) => path2.replace(key, "")
  };
});
var config = defineConfig((config2) => ({
  ...config2,
  plugins: [
    react({
      jsxImportSource: "@emotion/react"
    })
  ],
  build: {
    rollupOptions: {
      external: [
        // "/start.mjs",
        // "/swVersion.mjs",
        ...Object.keys(importMap.imports),
        ...rollupExternal
      ]
    },
    outDir: "dist-vite"
  },
  appType: "spa",
  assetsInclude: [
    "src/index.html"
  ],
  server: {
    proxy: {
      ...config2.mode === "build" ? { "/@": {
        target: "https://testing.spike.land/@",
        changeOrigin: true,
        rewrite: (path2) => path2.replace(/^\/@/, "")
      } } : {},
      "^/live/.*/": {
        target: "https://testing.spike.land/live",
        changeOrigin: true,
        rewrite: (path2) => {
          console.log("Proxying path:", path2);
          return path2.replace(/^\/live/, "");
        }
      },
      "/sw.js": {
        target: "https://testing.spike.land/sw.js",
        changeOrigin: true
      },
      // '/start.mjs': {
      //   target: "https://testing.spike.land/start.mjs",
      //   changeOrigin: true,
      //   rewrite: (path: string) => path.replace(/^\/start.mjs/, ""),
      // },
      "/swVersion.mjs": {
        target: "https://testing.spike.land/swVersion.mjs",
        changeOrigin: true,
        rewrite: (path2) => path2.replace(/^\/swVersion.mjs/, "")
      }
      // ...importMapProxy,
    }
  },
  resolve: {
    alias: {
      ...config2.command === "build" ? externalAliases : {},
      "@": path.resolve(__vite_injected_original_dirname, "./src/@")
      // ...importMap.imports
    }
  }
}));
console.log("Vite config:", JSON.stringify(config, null, 2));
console.log("Rollup external:", JSON.stringify(rollupExternal, null, 2));
console.log("External aliases:", JSON.stringify(externalAliases, null, 2));
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL0AvbGliL2ltcG9ydG1hcC11dGlscy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3ovc3Bpa2UubGFuZC9wYWNrYWdlcy9jb2RlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS96L3NwaWtlLmxhbmQvcGFja2FnZXMvY29kZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS96L3NwaWtlLmxhbmQvcGFja2FnZXMvY29kZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIFByb3h5T3B0aW9ucywgQXBwVHlwZSB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0BYWC92aXRlanMvcGx1Z2luLXJlYWN0LXN3Yyc7XG5pbXBvcnQgeyBpbXBvcnRNYXAgfSBmcm9tIFwiLi9zcmMvQC9saWIvaW1wb3J0bWFwLXV0aWxzXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG4vLyBpbXBvcnQgcHJlYWN0UGFja2FnZUpzb24gZnJvbSBcInByZWFjdC9wYWNrYWdlLmpzb25cIiBhc3NlcnQgeyB0eXBlOiBcImpzb25cIiB9O1xuXG5jb25zdCBleHRlcm5hbEZpbGVzID0gIGZzLnJlYWRkaXJTeW5jKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvQC9leHRlcm5hbFwiKSk7XG5cbmNvbnN0IGV4dGVybmFsUm9sbHVwID0gZXh0ZXJuYWxGaWxlcy5tYXAoKGZpbGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcImV4dGVybmFsXCIsXG4gICAgZmlsZTogXCIvQC9leHRlcm5hbC9cIiArIGZpbGUsXG4gIH07XG59KS5tYXAoKGZpbGUpID0+IHtcbiAgLy8gcmVwbGFjZSAudHMvdHN4IHdpdGggLm1qc1xuICBjb25zdCBmaWxlUGFydHMgPSBmaWxlLmZpbGUuc3BsaXQoXCIuXCIpO1xuICBmaWxlUGFydHMucG9wKCk7XG4gIGZpbGVQYXJ0cy5wdXNoKFwibWpzXCIpO1xuICBmaWxlLmZpbGUgPSBmaWxlUGFydHMuam9pbihcIi5cIik7XG4gIHJldHVybiBmaWxlO1xufVxuKTtcblxuLy8gY29uc3QgcHJlYWN0Q29tcGF0ID0gYC9wcmVhY3RAJHtwcmVhY3RQYWNrYWdlSnNvbi52ZXJzaW9ufS9jb21wYXRgO1xuXG4vLyoqKlxuXG5cbi8vIHtcbi8vICAgXCJAL2V4dGVybmFsL21vbmFjby1lZGl0b3JcIjogXCIvQC9leHRlcm5hbC9tb25hY28tZWRpdG9yLm1qc1wiLFxuLy8gXCJAL2V4dGVybmFsL0NvZGVCbG9ja1wiOiBcIi9AL2V4dGVybmFsL0NvZGVCbG9jay5tanNcIixcbi8vIFwiQC9leHRlcm5hbC9NYXJrZG93blwiOiBcIi9AL2V4dGVybmFsL01hcmtkb3duLm1qc1wiLFxuLy8gXCJAL2V4dGVybmFsL2ljb25zXCI6IFwiL0AvZXh0ZXJuYWwvaWNvbnMubWpzXCIsXG4vLyBcIkAvZXh0ZXJuYWwvbHVjaWRlUmVhY3RcIjogXCIvQC9leHRlcm5hbC9sdWNpZGVSZWFjdC5tanNcIixcbi8vIFwiQC9leHRlcm5hbC9yZWFjdFN5bnRheEhpZ2hsaWdodGVyXCI6IFwiL0AvZXh0ZXJuYWwvcmVhY3RTeW50YXhIaWdobGlnaHRlci5tanNcIixcbi8vIFwiQC9leHRlcm5hbC9yZWFjdFN5bnRheEhpZ2hsaWdodGVyUHJpc21cIjogXCIvQC9leHRlcm5hbC9yZWFjdFN5bnRheEhpZ2hsaWdodGVyUHJpc20ubWpzXCIsXG4vLyBcIkAvZXh0ZXJuYWwvc3RhcnQtYWNlXCI6IFwiL0AvZXh0ZXJuYWwvc3RhcnQtYWNlLm1qc1wiLFxuLy8gXCJAL2V4dGVybmFsL3VzZS1sb2NhbC1zdG9yYWdlXCI6IFwiL0AvZXh0ZXJuYWwvdXNlLWxvY2FsLXN0b3JhZ2UubWpzXCIsXG4vLyBcIkAvZXh0ZXJuYWwvd29ya2VyLW1vY2tcIjogXCIvQC9leHRlcm5hbC93b3JrZXItbW9jay5tanNcIixcbi8vIFwiQC9leHRlcm5hbC9yZWNvcmQtcnRjXCI6IFwiL0AvZXh0ZXJuYWwvcmVjb3JkLXJ0Yy5tanNcIlxuLy8gfVxuXG5jb25zdCBleHRlcm5hbEFsaWFzZXMgPSBleHRlcm5hbFJvbGx1cC5yZWR1Y2UoKGFjYzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiwgZmlsZSkgPT4ge1xuXG4gIC8vd2l0aG91dCBleHRlbnNpb24gYW5kIHNsYXNoIGF0IHRoZSBiZWdpbm5pbmdcblxuICBjb25zdCBmaWxlUGFydHMgPSBmaWxlLmZpbGUuc3BsaXQoXCIuXCIpO1xuICBmaWxlUGFydHMucG9wKCk7XG4gIGZpbGUuZmlsZSA9IGZpbGVQYXJ0cy5qb2luKFwiLlwiKTtcbiAgZmlsZS5maWxlID0gZmlsZS5maWxlLnJlcGxhY2UoXCIvQC9leHRlcm5hbC9cIiwgXCJAL2V4dGVybmFsL1wiKTtcbiAgYWNjW2ZpbGUuZmlsZV0gPSAnLycrZmlsZS5maWxlK1wiLm1qc1wiO1xuXG5cbi8vICBhY2NbZmlsZS5maWxlXSA9IGZpbGUuZmlsZTtcbiAgcmV0dXJuIGFjYztcbn1cbiwge30pO1xuXG5cbmNvbnN0IHJvbGx1cEV4dGVybmFsID0gT2JqZWN0LnZhbHVlcyhleHRlcm5hbEFsaWFzZXMpO1xuXG4vLyBDcmVhdGUgcHJveHkgY29uZmlndXJhdGlvbiBmcm9tIGltcG9ydCBtYXBcbmNvbnN0IGltcG9ydE1hcFByb3h5OiBSZWNvcmQ8c3RyaW5nLCBQcm94eU9wdGlvbnM+ID0ge307XG5PYmplY3QuZW50cmllcyhpbXBvcnRNYXAuaW1wb3J0cykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gIGltcG9ydE1hcFByb3h5W2tleV0gPSB7XG4gICAgdGFyZ2V0OiAnaHR0cHM6Ly90ZXN0aW5nLnNwaWtlLmxhbmQnICsgdmFsdWUsXG4gICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgIHJld3JpdGU6IChwYXRoOiBzdHJpbmcpID0+IHBhdGgucmVwbGFjZShrZXksIFwiXCIpLFxuICB9O1xufSk7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5jb25zdCBjb25maWcgPSBkZWZpbmVDb25maWcoKGNvbmZpZyk9Pih7IFxuICAuLi5jb25maWcsXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCh7XG4gICAganN4SW1wb3J0U291cmNlOiBcIkBlbW90aW9uL3JlYWN0XCIsXG4gIH0pXG5dLFxuIFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcblxuICAgICAgICBleHRlcm5hbDogW1xuICAgICAgICAgIC8vIFwiL3N0YXJ0Lm1qc1wiLFxuICAgICAgICAgIC8vIFwiL3N3VmVyc2lvbi5tanNcIixcbiAgICAgICAgICAuLi5PYmplY3Qua2V5cyhpbXBvcnRNYXAuaW1wb3J0cyksICBcbiAgICAgICAgIC4uLnJvbGx1cEV4dGVybmFsLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgb3V0RGlyOiBcImRpc3Qtdml0ZVwiLFxuICB9LFxuXG4gIGFwcFR5cGU6IFwic3BhXCIgYXMgQXBwVHlwZSxcbiAgXG4gIGFzc2V0c0luY2x1ZGU6IFtcbiAgICBcInNyYy9pbmRleC5odG1sXCIsXG4gIF0sXG5cbiAgc2VydmVyOiB7XG4gICBwcm94eToge1xuICAgICAuLi4oIGNvbmZpZy5tb2RlPT09J2J1aWxkJz8ge1wiL0BcIjoge1xuICAgICAgICB0YXJnZXQ6IFwiaHR0cHM6Ly90ZXN0aW5nLnNwaWtlLmxhbmQvQFwiLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwYXRoOiBzdHJpbmcpID0+IHBhdGgucmVwbGFjZSgvXlxcL0AvLCBcIlwiKSxcbiAgICAgIH19Ont9KSxcbiAgICAgICdeL2xpdmUvLiovJzoge1xuICAgICAgICB0YXJnZXQ6IFwiaHR0cHM6Ly90ZXN0aW5nLnNwaWtlLmxhbmQvbGl2ZVwiLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnUHJveHlpbmcgcGF0aDonLCBwYXRoKTtcbiAgICAgICAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9eXFwvbGl2ZS8sIFwiXCIpO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICcvc3cuanMnOiB7XG4gICAgICAgIHRhcmdldDogXCJodHRwczovL3Rlc3Rpbmcuc3Bpa2UubGFuZC9zdy5qc1wiLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICB9LFxuICAgICAgLy8gJy9zdGFydC5tanMnOiB7XG4gICAgICAvLyAgIHRhcmdldDogXCJodHRwczovL3Rlc3Rpbmcuc3Bpa2UubGFuZC9zdGFydC5tanNcIixcbiAgICAgIC8vICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgLy8gICByZXdyaXRlOiAocGF0aDogc3RyaW5nKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9zdGFydC5tanMvLCBcIlwiKSxcbiAgICAgIC8vIH0sXG4gICAgICAgICcvc3dWZXJzaW9uLm1qcyc6IHtcbiAgICAgICAgICB0YXJnZXQ6IFwiaHR0cHM6Ly90ZXN0aW5nLnNwaWtlLmxhbmQvc3dWZXJzaW9uLm1qc1wiLFxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlOiAocGF0aDogc3RyaW5nKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9zd1ZlcnNpb24ubWpzLywgXCJcIiksXG4gICAgICAgIH0sXG4gICAgICAvLyAuLi5pbXBvcnRNYXBQcm94eSxcbiAgICB9LFxuICB9LFxuXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgIC4uLihjb25maWcuY29tbWFuZD09PSdidWlsZCc/IGV4dGVybmFsQWxpYXNlczp7fSksXG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9AXCIpLFxuICAgICAgLy8gLi4uaW1wb3J0TWFwLmltcG9ydHNcbiAgICB9LFxuICB9LFxufSkpO1xuXG5cbmNvbnNvbGUubG9nKFwiVml0ZSBjb25maWc6XCIsIEpTT04uc3RyaW5naWZ5KGNvbmZpZywgbnVsbCwgMikpO1xuLy8gY29uc29sZS5sb2coXCJJbXBvcnQgbWFwIHByb3h5OlwiLCBKU09OLnN0cmluZ2lmeShpbXBvcnRNYXBQcm94eSwgbnVsbCwgMikpO1xuY29uc29sZS5sb2coXCJSb2xsdXAgZXh0ZXJuYWw6XCIsIEpTT04uc3RyaW5naWZ5KHJvbGx1cEV4dGVybmFsLCBudWxsLCAyKSk7XG5jb25zb2xlLmxvZyhcIkV4dGVybmFsIGFsaWFzZXM6XCIsIEpTT04uc3RyaW5naWZ5KGV4dGVybmFsQWxpYXNlcywgbnVsbCwgMikpOyBcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnOyAgXG5cbi8vIGRlZmluZUNvbmZpZyhjb25maWcpOyAiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3ovc3Bpa2UubGFuZC9wYWNrYWdlcy9jb2RlL3NyYy9AL2xpYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvei9zcGlrZS5sYW5kL3BhY2thZ2VzL2NvZGUvc3JjL0AvbGliL2ltcG9ydG1hcC11dGlscy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS96L3NwaWtlLmxhbmQvcGFja2FnZXMvY29kZS9zcmMvQC9saWIvaW1wb3J0bWFwLXV0aWxzLnRzXCI7Ly8gc3JjL2ltcG9ydE1hcFV0aWxzLnRzXG5cbmV4cG9ydCBjb25zdCBvbyA9IHtcbiAgXCIvQC9cIjogXCIvQC9cIixcbiAgXCJAZW1vdGlvbi9yZWFjdC9qc3gtcnVudGltZVwiOiBcIi9lbW90aW9uSnN4UnVudGltZS5tanNcIixcbiAgXCJyZWFjdC9qc3gtcnVudGltZVwiOiBcIi9qc3gubWpzXCIsXG4gIFwicmVhY3QtZG9tL3NlcnZlclwiOiBcIi9yZWFjdERvbVNlcnZlci5tanNcIixcbiAgXCJyZWFjdC1kb20vY2xpZW50XCI6IFwiL3JlYWN0RG9tQ2xpZW50Lm1qc1wiLFxuICBcIkBlbW90aW9uL3JlYWN0XCI6IFwiL2Vtb3Rpb24ubWpzXCIsXG4gIFwicmVhY3RcIjogXCIvcmVhY3RNb2QubWpzXCIsXG4gIFwiZnJhbWVyLW1vdGlvblwiOiBcIi9tb3Rpb24ubWpzXCIsXG4gIFwicmVhY3QtZG9tXCI6IFwiL3JlYWN0RG9tLm1qc1wiLFxufTtcblxuZXhwb3J0IGNvbnN0IGltcG9ydE1hcCA9IHsgaW1wb3J0czogb28gfTtcblxuY29uc3QgZXh0ZXJuYWxTdHJpbmcgPSBcImJ1bmRsZT10cnVlJmV4dGVybmFsPXJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbXBvcnRNYXBSZXBsYWNlKGNvZGU6IHN0cmluZywgb3JpZ2luOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyByZXR1cm4gY29kZTtcbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHRoZSBjb2RlIGFscmVhZHkgY29udGFpbnMgXCJpbXBvcnRNYXBSZXBsYWNlXCIgdG8gYXZvaWQgZG91YmxlIHByb2Nlc3NpbmdcbiAgaWYgKGNvZGUuc2xpY2UoMCwgMzApLmluY2x1ZGVzKFwiaW1wb3J0TWFwUmVwbGFjZVwiKSkge1xuICAgIHJldHVybiBjb2RlO1xuICB9XG5cbiAgLy8gRGVmaW5lIHJlZ2V4IHBhdHRlcm5zIGZvciBkaWZmZXJlbnQgdHlwZXMgb2YgaW1wb3J0c1xuICBjb25zdCB0b3BMZXZlbEltcG9ydFBhdHRlcm4gPVxuICAgIC8oaW1wb3J0XFxzKig/OltcXHd7fSwqXFxzXSt8W1xcd3t9IGFzLCpcXHN8JF0rfFxcdyt8JHxcXCRcXHcrKVxccypmcm9tXFxzKikoWydcImBdW14nYFwiXStbJ1wiYF0pL2c7XG4gIGNvbnN0IHRvcExldmVsTm9Gcm9tUGF0dGVybiA9IC8oPzwhWy5cIkBcXHctXSlpbXBvcnRcXHMqKFsnXCJgXSkoPzooPyFcXDEpLikqXFwxL2c7XG5cbiAgY29uc3QgdG9wTGV2ZWxFeHBvcnRQYXR0ZXJuID1cbiAgICAvKGV4cG9ydFxccyooPzpbXFx3e30sKlxcc10rfFtcXHd7fSBhcywqXFxzfCRdK3xcXHcrfFxcJHxcXCRcXHcrKVxccypmcm9tXFxzKikoWydcImBdW14nYFwiXStbJ1wiYF0pL2c7XG4gIGNvbnN0IGR5bmFtaWNJbXBvcnRQYXR0ZXJuID0gLyhpbXBvcnRcXCgpKFsnXCJgXVteJ2BcIl0rWydcImBdKShcXCkpL2c7XG4gIGNvbnN0IGR5bmFtaWNJbXBvcnRUZW1wbGF0ZVBhdHRlcm4gPSAvKGltcG9ydFxcKCkoYFteYF0rYCkoXFwpKS9nO1xuXG4gIC8vIERlZmluZSBhIHJlcGxhY2VyIGZ1bmN0aW9uIHRvIG1vZGlmeSB0aGUgaW1wb3J0IHBhdGhzXG4gIGNvbnN0IHJlcGxhY2VyID0gKG1hdGNoOiBzdHJpbmcsIHAxOiBzdHJpbmcsIHAyOiBzdHJpbmcsIHAzY2hhcjogc3RyaW5nKSA9PiB7XG4gICAgbGV0IGlzTW9kdWxlID0gZmFsc2U7XG4gICAgT2JqZWN0LmtleXMob28pLmZvckVhY2goKHBrZykgPT4ge1xuICAgICAgaWYgKG1hdGNoLmluY2x1ZGVzKGBcIiR7cGtnfVwiYCkpIHtcbiAgICAgICAgaXNNb2R1bGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChpc01vZHVsZSkge1xuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH1cbiAgICBjb25zdCBwMyA9IFN0cmluZyhwM2NoYXIpLnJlcGxhY2UoL1swLTldL2csIFwiXCIpOyAvLyBSZW1vdmUgbnVtZXJpYyBjaGFyYWN0ZXJzIGZyb20gcDNcblxuICAgIGlmICh0eXBlb2YgcDIgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnN0IHBrZyA9IG1hdGNoLnNwbGl0KCdcIicpWzFdO1xuICAgICAgaWYgKCFwa2cpIHJldHVybiBtYXRjaDtcbiAgICAgIGlmIChwa2c/LnN0YXJ0c1dpdGgoXCJodHRwXCIpKSByZXR1cm4gbWF0Y2g7XG4gICAgICBpZiAocGtnPy5zdGFydHNXaXRoKFwiL1wiKSkgcmV0dXJuIG1hdGNoO1xuICAgICAgaWYgKHBrZz8uc3RhcnRzV2l0aChcIi4vXCIpKSByZXR1cm4gbWF0Y2g7XG4gICAgICBpZiAocGtnPy5zdGFydHNXaXRoKFwiLFwiKSkgcmV0dXJuIG1hdGNoO1xuXG4gICAgICByZXR1cm4gYGltcG9ydCBcIiR7b3JpZ2lufS8ke21hdGNoLnNwbGl0KCdcIicpWzFdfT8ke2V4dGVybmFsU3RyaW5nfVwiO2A7XG4gICAgfVxuXG4gICAgaWYgKHAyPy5zdGFydHNXaXRoKFwiYFwiKSAmJiBwMi5lbmRzV2l0aChcImBcIikpIHtcbiAgICAgIC8vIFRoaXMgaXMgYSB0ZW1wbGF0ZSBsaXRlcmFsLCB3ZSBzaG91bGQga2VlcCBpdCBhcyBpc1xuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH1cblxuICAgIGNvbnN0IHBhY2thZ2VOYW1lID0gcDIuc2xpY2UoMSwgLTEpOyAvLyBSZW1vdmUgcXVvdGVzIGZyb20gcGFja2FnZSBuYW1lXG5cbiAgICBpZiAocGFja2FnZU5hbWU/LnN0YXJ0c1dpdGgoXCJkYXRhOnRleHRcIikpIHtcbiAgICAgIHJldHVybiBwMSArIGBcIiR7cGFja2FnZU5hbWV9L2luZGV4LmpzXCJgICsgcDM7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHBhY2thZ2VOYW1lPy5zdGFydHNXaXRoKGAvbGl2ZWApICYmXG4gICAgICAhcGFja2FnZU5hbWUuaW5jbHVkZXMoXCJpbmRleC5qc1wiKVxuICAgICkge1xuICAgICAgcmV0dXJuIHAxICsgYFwiJHtwYWNrYWdlTmFtZX0vaW5kZXguanNcImAgKyBwMztcbiAgICB9XG4gICAgaWYgKHBhY2thZ2VOYW1lPy5zdGFydHNXaXRoKFwiLi9cIikgJiYgIXBhY2thZ2VOYW1lLnNsaWNlKDEpLmluY2x1ZGVzKFwiLlwiKSkge1xuICAgICAgcmV0dXJuIHAxICsgYFwiL2xpdmUvJHtwYWNrYWdlTmFtZS5zbGljZSgyKX0vaW5kZXguanNcImAgKyBwMztcbiAgICB9XG5cbiAgICBpZiAocGFja2FnZU5hbWU/LnN0YXJ0c1dpdGgoXCIvXCIpKSB7XG4gICAgICByZXR1cm4gcDEgKyBgXCIke3BhY2thZ2VOYW1lfVwiYCArIHAzO1xuICAgIH1cblxuICAgIGlmIChwYWNrYWdlTmFtZT8uc3RhcnRzV2l0aChcIi5cIikgfHwgcGFja2FnZU5hbWU/LnN0YXJ0c1dpdGgoXCJodHRwXCIpKSB7XG4gICAgICBpZiAocGFja2FnZU5hbWU/LnN0YXJ0c1dpdGgoXCJodHRwXCIpICYmICFwYWNrYWdlTmFtZT8uc3RhcnRzV2l0aChvcmlnaW4pKSB7XG4gICAgICAgIGNvbnN0IG9sZFVybCA9IG5ldyBVUkwocGFja2FnZU5hbWUpO1xuICAgICAgICBjb25zdCBbcGtnTmFtZSwgZXhwb3J0c10gPSBvbGRVcmwucGF0aG5hbWUuc2xpY2UoMSkuc3BsaXQoXG4gICAgICAgICAgXCI/YnVuZGxlPXRydWUmZXhwb3J0cz1cIixcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGV4cG9ydHMpIHtcbiAgICAgICAgICByZXR1cm4gcDEgK1xuICAgICAgICAgICAgYFwiJHtvcmlnaW59LyR7cGtnTmFtZX0/JHtleHRlcm5hbFN0cmluZ30mZXhwb3J0cz0ke2V4cG9ydHN9XCJgICsgcDM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoOyAvLyBLZWVwIGV4dGVybmFsIFVSTHMgYXMgdGhleSBhcmVcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9XG5cbiAgICBpZiAocGFja2FnZU5hbWU/LnN0YXJ0c1dpdGgoXCIvbGl2ZVwiKSkge1xuICAgICAgcmV0dXJuIHAxICsgYFwiJHtwYWNrYWdlTmFtZX0vaW5kZXguanNcImAgKyBwMztcbiAgICB9XG5cbiAgICBpZiAocGFja2FnZU5hbWU/LnN0YXJ0c1dpdGgoXCJAL1wiKSkge1xuICAgICAgcmV0dXJuIHAxICsgYFwiJHtvcmlnaW59LyR7cGFja2FnZU5hbWV9Lm1qc1wiYCArIHAzO1xuICAgIH1cblxuICAgIGlmIChwYWNrYWdlTmFtZS5pbmNsdWRlcyhcIi5cIikpIHtcbiAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHBhY2thZ2VOYW1lLnNwbGl0KFwiLlwiKS5wb3AoKSE7XG4gICAgICBpZiAoW1wianNcIiwgXCJtanNcIiwgXCJ0c1wiLCBcInRzeFwiXS5pbmNsdWRlcyhleHRlbnNpb24pKSB7XG4gICAgICAgIHJldHVybiBwMSArIGBcIiR7b3JpZ2lufS8ke3BhY2thZ2VOYW1lfVwiYCArIHAzO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBzcGVjaWZpYyBleHBvcnRzXG4gICAgY29uc3QgW3BrZ05hbWUsIGV4cG9ydHNdID0gcGFja2FnZU5hbWUuc3BsaXQoYD8ke2V4dGVybmFsU3RyaW5nfSZleHBvcnRzPWApO1xuICAgIGlmIChleHBvcnRzKSB7XG4gICAgICByZXR1cm4gcDEgK1xuICAgICAgICBgXCIke29yaWdpbn0vJHtwa2dOYW1lfT8ke2V4dGVybmFsU3RyaW5nfSZleHBvcnRzPSR7ZXhwb3J0c31cImAgKyBwMztcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgY2xldmVyIHRvcC1sZXZlbCBleHBvcnRzXG4gICAgY29uc3QgaW1wb3J0TWF0Y2ggPSBtYXRjaC5tYXRjaCgvaW1wb3J0XFxzKntcXHMqKFtefV0rKVxccyp9Lyk7XG4gICAgaWYgKGltcG9ydE1hdGNoKSB7XG4gICAgICBjb25zdCBpbXBvcnRlZEl0ZW1zID0gaW1wb3J0TWF0Y2hbMV0uc3BsaXQoXCIsXCIpLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBbb3JpZ2luYWxOYW1lXSA9IGl0ZW0udHJpbSgpLnNwbGl0KC9cXHMrYXNcXHMrLyk7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbE5hbWUudHJpbSgpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcDEgK1xuICAgICAgICBgXCIke29yaWdpbn0vJHtwYWNrYWdlTmFtZX0/JHtleHRlcm5hbFN0cmluZ30mZXhwb3J0cz0ke2ltcG9ydGVkSXRlbXMuam9pbihcIixcIil9XCJgICsgcDM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHAxICsgYFwiJHtvcmlnaW59LyR7cGFja2FnZU5hbWV9PyR7ZXh0ZXJuYWxTdHJpbmd9XCJgICsgcDM7XG4gIH07XG5cbiAgLy8gQ29udmVydCBjb2RlIHRvIHN0cmluZyBpZiBpdCdzIG5vdCBhbHJlYWR5IGEgc3RyaW5nXG4gIGNvbnN0IHN0ciA9IHR5cGVvZiBjb2RlID09PSBcInN0cmluZ1wiXG4gICAgPyBjb2RlXG4gICAgOiBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUobmV3IFVpbnQ4QXJyYXkoY29kZSkpO1xuXG4gIC8vIFJlcGxhY2UgaW1wb3J0IHBhdGhzIHVzaW5nIHRoZSByZXBsYWNlciBmdW5jdGlvblxuICBsZXQgcmVwbGFjZWQgPSBzdHJcbiAgICAucmVwbGFjZSh0b3BMZXZlbEltcG9ydFBhdHRlcm4sIHJlcGxhY2VyKVxuICAgIC5yZXBsYWNlKHRvcExldmVsRXhwb3J0UGF0dGVybiwgcmVwbGFjZXIpXG4gICAgLnJlcGxhY2UoZHluYW1pY0ltcG9ydFBhdHRlcm4sIHJlcGxhY2VyKVxuICAgIC5yZXBsYWNlKGR5bmFtaWNJbXBvcnRUZW1wbGF0ZVBhdHRlcm4sIHJlcGxhY2VyKVxuICAgIC5yZXBsYWNlKHRvcExldmVsTm9Gcm9tUGF0dGVybiwgcmVwbGFjZXIpO1xuXG4gIHJlcGxhY2VkID0gcmVwbGFjZWQuc3BsaXQoXCJcXG5cIikubWFwKChsaW5lKSA9PiB7XG4gICAgbGluZS50cmltKCk7XG4gICAgcmV0dXJuIGxpbmU7XG4gIH0pLmZpbHRlcigobGluZSkgPT4gIWxpbmU/LnN0YXJ0c1dpdGgoXCIvL1wiKSkuam9pbihcIlxcblwiKTtcbiAgLy8gUmVwbGFjZSBzcGVjaWZpYyBwYWNrYWdlIHBhdGhzIGJhc2VkIG9uIHRoZSBpbXBvcnQgbWFwIChvbylcbiAgLy8gT2JqZWN0LmtleXMob28pLmZvckVhY2goKHBrZykgPT4ge1xuICAvLyAgIHJlcGxhY2VkID0gcmVwbGFjZWQuc3BsaXQoYC8ke3BrZ30/JHtleHRlcm5hbFN0cmluZ31gKS5qb2luKFxuICAvLyAgICAgb3JpZ2luICsgb29bcGtnIGFzIGtleW9mIHR5cGVvZiBvb10sXG4gIC8vICAgKTtcbiAgLy8gfSk7XG5cbiAgLy8gT2JqZWN0LmtleXMob28pLmZvckVhY2goKHBrZykgPT4ge1xuICAvLyAgIHJlcGxhY2VkID0gcmVwbGFjZWQuc3BsaXQoYFwiJHtwa2d9XCJgKS5qb2luKFxuICAvLyAgICAgXCJcXFwiXCIgKyBwa2cgKyBcIlxcXCJcIixcbiAgLy8gICApO1xuICAvLyB9KTtcblxuICByZXR1cm4gYFxuLyoqIGltcG9ydE1hcFJlcGxhY2UgKi9cbmAgKyByZXBsYWNlZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW1wb3J0TWFwO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrUixPQUFPLFVBQVU7QUFDblMsU0FBUyxvQkFBMkM7QUFDcEQsT0FBTyxXQUFXOzs7QUNBWCxJQUFNLEtBQUs7QUFBQSxFQUNoQixPQUFPO0FBQUEsRUFDUCw4QkFBOEI7QUFBQSxFQUM5QixxQkFBcUI7QUFBQSxFQUNyQixvQkFBb0I7QUFBQSxFQUNwQixvQkFBb0I7QUFBQSxFQUNwQixrQkFBa0I7QUFBQSxFQUNsQixTQUFTO0FBQUEsRUFDVCxpQkFBaUI7QUFBQSxFQUNqQixhQUFhO0FBQ2Y7QUFFTyxJQUFNLFlBQVksRUFBRSxTQUFTLEdBQUc7OztBRFZ2QyxPQUFPLFFBQVE7QUFKZixJQUFNLG1DQUFtQztBQU96QyxJQUFNLGdCQUFpQixHQUFHLFlBQVksS0FBSyxRQUFRLGtDQUFXLGtCQUFrQixDQUFDO0FBRWpGLElBQU0saUJBQWlCLGNBQWMsSUFBSSxDQUFDLFNBQVM7QUFDakQsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sTUFBTSxpQkFBaUI7QUFBQSxFQUN6QjtBQUNGLENBQUMsRUFBRTtBQUFBLEVBQUksQ0FBQyxTQUFTO0FBRWYsVUFBTSxZ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
