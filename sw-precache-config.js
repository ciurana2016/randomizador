module.exports = {
    staticFileGlobs: [
      "dist/favicon.ico",
      "dist/**.html",
      "dist/**.js",
      "dist/**.css"
    ],
    root: "dist",
    stripPrefix: "dist/",
    navigateFallback: "/index.html"
  };