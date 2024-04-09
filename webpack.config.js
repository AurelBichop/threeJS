const webpack = require("webpack");
const path = require("path");

let config = {
    mode: 'development',
    entry: {
        main: './scripts/index/main.js',
        combat: './scripts/combat/combat.js'
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
    }
}

module.exports = config;