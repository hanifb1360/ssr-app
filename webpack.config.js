import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

// Recreate __dirname for ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    mode: "development", // Set the mode here as part of the configuration object
    entry: "./src/client/index.js",
    output: {
        path: resolve(__dirname, "dist"), // Use the recreated __dirname
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
                test: /\.css$/, // If you have CSS files
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    devServer: {
        static: resolve(__dirname, "dist"), // Serve from the correct dist folder
        port: 3001,
        open: true, // Automatically opens the browser
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // Use this if you have a custom template
            filename: "index.html", // The output file
            inject: "body", // Inject the scripts into the <body>
        }),
    ],
};