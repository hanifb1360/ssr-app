import { renderToPipeableStream } from "react-dom/server";
import { renderToHTML, cache, diffDOM } from "ssr-library";

/**
 * Handle SSR rendering with caching, diffing, and streaming.
 *
 * @param {Object} Component - The SSR component to render.
 * @param {Object} props - Props to pass to the component.
 * @param {Object} res - Express response object.
 */
export const handleSSR = (Component, props, res) => {
  const componentInstance = new Component(props);
  const newHTML = renderToHTML(componentInstance);

  // Check cached version
  const cachedHTML = cache.get(componentInstance, props);
  if (cachedHTML) {
    const diffedHTML = diffDOM(cachedHTML, newHTML);

    // If there's a diff, send the diffed HTML
    if (diffedHTML) {
      cache.set(componentInstance, props, newHTML);
      return res.send(`<div id="diff">${diffedHTML}</div>`);
    }

    // If no changes, send 304 Not Modified
    return res.status(304).end();
  }

  // If no cached version exists, stream the full HTML
  const stream = renderToPipeableStream(componentInstance.render(), {
    onShellReady() {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");

      // Start streaming shell
      res.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${props.title || "My SSR App"}</title>
  </head>
  <body>
    <div id="root">`);
      stream.pipe(res, { end: false });
    },
    onAllReady() {
      // Finish streaming
      res.write(`</div>
    <script>
      console.log("Hydration scripts or dynamic logic can go here.");
    </script>
  </body>
</html>`);
      res.end();
    },
    onShellError(err) {
      console.error("Error rendering shell:", err);
      res.status(500).send("Internal Server Error");
    },
    onError(err) {
      console.error("Error during stream:", err);
    },
  });

  // Cache the rendered HTML
  cache.set(componentInstance, props, newHTML);
};