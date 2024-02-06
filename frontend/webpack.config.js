const { resolve } = require('path');
const { DefinePlugin } = require('webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: resolve(__dirname, "./static/frontend"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
                },
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production"),
            },
        }),
    ],
};
