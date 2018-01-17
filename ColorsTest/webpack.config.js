const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const outDir = path.resolve(__dirname, "wwwroot");
const srcDir = path.resolve(__dirname, "app");
const baseUrl = "/";

const extractVendorCss = new ExtractTextPlugin({ filename: "vendor.[contenthash].css", allChunks: true });
const extractAppCss = new ExtractTextPlugin({ filename: "app.[contenthash].css", allChunks: true });

module.exports = {
    entry: `${srcDir}/index.tsx`,
    output: {
        filename: "bundle.[hash].js",
        path: outDir,
        publicPath: baseUrl
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // Vendor css
            {
                test: /\.min\.css$/,
                use: extractVendorCss.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true,
                                sourceMap: false
                            }
                        }
                    ]
                }),
                issuer: /\.tsx$/i
            },
            
            // App sass
            {
                test: /index\.scss$/,
                use: extractAppCss.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: false,
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }),
                issuer: /\.tsx$/i
            },

            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            // Fonts
            { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: "url-loader", options: { limit: 10000, mimetype: "application/font-woff2" } },
            { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: "url-loader", options: { limit: 10000, mimetype: "application/font-woff" } },
            { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: "url-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: `${srcDir}/index.ejs`,
            filename: `${outDir}/index.html`
        }),
        extractVendorCss,
        extractAppCss,
        new CleanWebpackPlugin([outDir]),
        new CopyWebpackPlugin([
            { from: "./node_modules/react/umd/react.development.js", to: "./react.js" },
            { from: "./node_modules/react-dom/umd/react-dom.development.js", to: "./react-dom.js" }
        ])
    ]
};