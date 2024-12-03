const rspack = require("@rspack/core");
const refreshPlugin = require("@rspack/plugin-react-refresh");
const isDev = process.env.NODE_ENV === "development";
const path = require("path");

const printCompilationMessage = require("./compilation.config.js");

const packageJson = require('./package.json');
const { type } = require("os");

/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
    context: __dirname,
    entry: {
        main: "./src/index.ts",
    },

    devServer: {
        port: 8081,
        historyApiFallback: true,
        watchFiles: [path.resolve(__dirname, "src")],
        onListening: function (devServer) {
            if (devServer.server == null) return
            const address = devServer.server.address();
            if (typeof address === 'string' || address == null) return
            const port = address.port;

            printCompilationMessage("compiling", port);

            devServer.compiler.hooks.done.tap(
                "OutputMessagePlugin",
                (stats) => {
                    setImmediate(() => {
                        if (stats.hasErrors()) {
                            printCompilationMessage("failure", port);
                        } else {
                            printCompilationMessage("success", port);
                        }
                    });
                }
            );
        },
    },

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                type: "asset",
            },
            {
                test: /\.css$/,
                use: ["postcss-loader"],
                type: "css",
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: {
                                    tailwindcss: {},
                                    autoprefixer: {},
                                },
                            },
                        },
                    },
                ],
                type: "css",
            },
            {
                test: /\.(jsx?|tsx?)$/,
                use: [
                    {
                        loader: "builtin:swc-loader",
                        options: {
                            sourceMap: true,
                            jsc: {
                                parser: {
                                    syntax: "typescript",
                                    tsx: true,
                                },
                                transform: {
                                    react: {
                                        runtime: "automatic",
                                        development: isDev,
                                        refresh: isDev,
                                    },
                                },
                            },
                            env: {
                                targets: [
                                    "chrome >= 87",
                                    "edge >= 88",
                                    "firefox >= 78",
                                    "safari >= 14",
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new rspack.container.ModuleFederationPlugin({
            name: "reactApp",
            filename: "remoteEntry.js",
            exposes: {
                "./Home": "./src/pages/Home.tsx",
            },
            shared: {
                react: {
                    singleton: true,
                },
                "react-dom/client": {
                    singleton: true,
                }
            },
        }),
        new rspack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        }),
        new rspack.ProgressPlugin({}),
        new rspack.HtmlRspackPlugin({
            template: "./src/index.html",
        }),
        new rspack.SwcCssMinimizerRspackPlugin({}),
        isDev ? new refreshPlugin() : null,
    ].filter(Boolean),
};
