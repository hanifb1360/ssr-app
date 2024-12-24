import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

// Recreate __dirname for ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(resolve(__dirname, "src/design-system"));

export default {
    mode: "development", // Set the mode (development or production)
    entry: "./src/client/index.js",
    output: {
        path: resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Match JavaScript files
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader", // Use Babel loader for transpilation
                },
            },
            {
                test: /\.css$/, // Match CSS files
                use: [
                    "style-loader", // Inject CSS into the DOM
                    {
                        loader: "css-loader", // Resolve CSS imports
                        options: {
                            importLoaders: 1, // Ensure `@import` statements are processed
                            modules: false, // Disable CSS Modules (set true if needed)
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        static: resolve(__dirname, "dist"), // Serve files from the dist folder
        port: 3001, // Set development server port
        open: true, // Automatically opens the browser
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // Custom HTML template
            filename: "index.html", // Output HTML file
            inject: "body", // Inject JavaScript into the <body>
        }),
    ],
    resolve: {
        alias: {
            "design-system": resolve(__dirname, "src/design-system"), // Alias for design-system
        },
        extensions: [".js", ".jsx", ".json"], // Automatically resolve these extensions
        mainFiles: ["index"], // Default to index.js for directory imports
    },
};