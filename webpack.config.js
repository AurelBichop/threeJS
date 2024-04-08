const webpack = require("webpack");
const path = require("path");

let config = {
    mode: 'development',
    entry: ['./scripts/index/main.js'],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "./main.js"
    },
    entry: ['./scripts/combat/combat.js'],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "./combat.js"
    }
}

module.exports = config;