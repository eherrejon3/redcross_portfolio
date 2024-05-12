
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/eherrejon/development/redcross_portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/eherrejon/development/redcross_portfolio/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/eherrejon/development/redcross_portfolio/src/pages/about.js")),
  "component---src-pages-collections-js": preferDefault(require("/home/eherrejon/development/redcross_portfolio/src/pages/collections.js")),
  "component---src-pages-index-js": preferDefault(require("/home/eherrejon/development/redcross_portfolio/src/pages/index.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/home/eherrejon/development/redcross_portfolio/src/pages/using-typescript.tsx"))
}

