
# Hybrid SSR & CSR Demo App

This is a hybrid demo application showcasing the capabilities of **`ssr-library`**. The application demonstrates how to integrate **Server-Side Rendering (SSR)** and **Client-Side Rendering (CSR)** in a single project.

## Features

- **SSR**: Server-side rendering for routes like `/about`.
- **CSR**: Client-side rendering for dynamic components like `/csr-counter`.
- **Hybrid Navigation**: Seamless navigation between SSR and CSR using `HybridLink`.
- **Powered by React & Express**: Uses React for CSR and Express.js for the server.
- **Customizable**: Serves as a template for projects using `ssr-library`.

---

## Prerequisites

Ensure the following are installed on your system:

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Running the App

### Development Mode

1. Run the Webpack dev server for CSR development:
   ```bash
   npm run start:dev
   ```

   The app will be available at `http://localhost:3001`.

2. Open your browser and navigate to:
   - `http://localhost:3001/csr-counter` for the CSR Counter page.
   - `http://localhost:3001/about` for the SSR About page.

### Production Mode

1. Build the client-side React app:
   ```bash
   npm run build
   ```

2. Start the Express server:
   ```bash
   npm run start
   ```

3. Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure

```
project-root/
├── src/
│   ├── client/               # React entry point and CSR components
│   ├── components/
│   │   ├── csr/              # CSR components (e.g., Counter.js, HybridLink.js)
│   │   ├── ssr/              # SSR components (e.g., AboutPage.js, Layout.js)
│   │   └── shared/           # Shared components between SSR and CSR
│   ├── routes/               # Express server routes
│   ├── server/               # Express server entry point
│   ├── styles/               # CSS or global styles
│   └── utils/                # Utility functions (e.g., renderToHTML.js)
├── dist/                     # Built files for production
├── webpack.config.js         # Webpack configuration
├── babel.config.json         # Babel configuration
├── package.json              # Project dependencies and scripts
```

---

## Scripts

- `npm run start`: Start the production server.
- `npm run build`: Build the client-side React app for production.
- `npm run start:dev`: Start the Webpack dev server for CSR development.

---

## Hybrid Navigation

This app uses a custom `HybridLink` component to enable navigation between SSR and CSR routes. 

- **SSR Routes**: Trigger a full page reload and are handled by the server (e.g., `/about`).
- **CSR Routes**: Use React Router for client-side navigation without a page reload (e.g., `/csr-counter`).

---

## License

This project is released under the MIT License.

---

## Author

This demo app was created to showcase the capabilities of **`ssr-library`**. Contributions and feedback are welcome!
