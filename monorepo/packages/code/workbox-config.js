module.exports = {
  globDirectory: "js/",
  globPatterns: [
    "**/*.{css,ttf,webp,png,mjs,html,js,json}",
  ],
  globIgnores: ["**/chunks/**"],
  swDest: "js/sw.js",
  swSrc: "js/sw.js",
};
