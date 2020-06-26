const path = require("path");
const webpack = require("webpack");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizedCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
    },
    entry: {
        main: [
            "./src/main.js"
        ]
    },
    mode: "production",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [MiniCSSExtractPlugin.loader, "css-loader"]
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
        new MinifyPlugin(),
        new MiniCSSExtractPlugin({
            filename: "style.css"
        }),
        //new HtmlWebpackPlugin({
        //    template: "./src/index.html"
        //}),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new CompressionPlugin({
            algorithm: "gzip",
            test: /\.(js|css|html|jpg|png)$/,
        }),
        new BrotliPlugin()
    ]
}