// const { Module } = require("webpack");
const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.ts',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            include: [path.resolve(__dirname, "src")]
            // exclude: /node_modules/

        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
            include: [path.resolve(__dirname, "dist")]
        },
        {
            test: /\.html$/i,
            loader: 'html-loader',
            include: [path.resolve(__dirname, "dist")]
        }]


    },
    resolve: {
        extensions: ['.ts', '.js', '.css', '.html']

    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: "8080",
        compress: true
    }
}