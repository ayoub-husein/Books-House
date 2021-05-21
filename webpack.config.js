const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports ={
    entry: './src/javascript/index.js',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename: 'javascript/bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },

            {
                test: /\.(sass|css|scss)$/,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../',
                    }
                },
                "css-loader",
                "sass-loader",
                ],
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: "images",
                    }
                  }
                ]
            },

            {
                test: /\.(svg|eot|woff|woff2|ttf)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: "fonts",
                    }
                  }
                ]
            },

            {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                  exposes: ["$", "jQuery"],
                },
            },
        ],
    },

    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 9801,
        writeToDisk: true,
        stats: 'errors-only',
        open: true,
    },
    
    plugins: [

        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),

        new HtmlWebpackPlugin({
            template: './src/Self-employment.html',
            filename: 'Self-employment.html',
        }),

        new HtmlWebpackPlugin({
            template: './src/User-Experience-UX.html',
            filename: 'User-Experience-UX.html',
        }),

        new HtmlWebpackPlugin({
            template: './src/shopping-cart.html',
            filename: 'shopping-cart.html',
        }),

        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),
    ]
    
};