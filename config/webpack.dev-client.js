const path = require("path");
const webpack = require("webpack");
const OptimizedCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    name: "client",
    resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
    },
    entry: [
            "react-hot-loader/patch",
            "webpack-hot-middleware/client?reload=true",
            "./src/main.js"
        ]
    ,
    output: {
        filename: "[name]-bundle.js",
        chunkFilename: "[name].js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    devServer: {
        contentBase: "dist",
        hot: false,
        overlay: true,
        stats: {
            colors: true
        }
    },
    mode: "development",
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
        new webpack.HotModuleReplacementPlugin()
    ]

}