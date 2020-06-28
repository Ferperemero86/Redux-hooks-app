const path = require("path");
const webpack = require("webpack");
const OptimizedCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    name: "server",
    resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
    },
    entry: "./src/server/render.js",
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../build"),
        libraryTarget: "commonjs2"
    },
    target: "node",
    externals: nodeExternals(),
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules/",
                use: ["babel-loader"]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            attributes: true
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new OptimizedCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require("cssnano"),
            cssProcessorOptions: {discardComments: {
                removeAll: true,
                canPrint: true
            }}
        }),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("development")
            }
        }),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ]
   
}