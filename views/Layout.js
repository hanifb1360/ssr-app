import { LayoutComponent } from "ssr-library";

class Layout extends LayoutComponent {
  render() {
    const { title, content } = this.props;

    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${title}</title>
          <style>
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
          <header>
            <h1>${title}</h1>
          </header>
          <main>${content}</main>
          <footer>&copy; 2024 My SSR Site</footer>

          <!-- Centralized Client-Side Script -->
          <script>
            document.getElementById("increment-btn").addEventListener("click", () => {
              const urlParams = new URLSearchParams(window.location.search);
              const currentCount = parseInt(urlParams.get("count") || "0", 10);
              const newCount = currentCount + 1;

              // Reload the page with the updated count
              window.location.search = "?count=" + newCount;
            });
          </script>
        </body>
      </html>
    `;
  }
}

export default Layout;