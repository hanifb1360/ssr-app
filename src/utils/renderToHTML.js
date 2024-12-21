import { renderToHTML } from "ssr-library";

export const renderToHTMLPage = (component) => {
  const htmlContent = renderToHTML(component);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${component.props.title || "My SSR App"}</title>
  <style>
    /* Add shared styles here */
    .btn-primary {
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <div id="root">${htmlContent}</div>
  <script>
    // Pass SSR props to the client for hydration
    window.__INITIAL_PROPS__ = ${JSON.stringify(component.props || {})};
  </script>
</body>
</html>`;
};