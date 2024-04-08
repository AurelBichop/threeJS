const webpack = require("webpack");
const path = require("path");

let config = {
    mode: 'development',
    entry: "./scripts/test3D.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "./main.js"
    }
}

module.exports = config;