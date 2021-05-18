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
        ],
    },

    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 9800,
        writeToDisk: true,
        stats: 'errors-only',
        // open: true,
    },
    
    plugins: [

        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),

        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        })
    ]
    
};