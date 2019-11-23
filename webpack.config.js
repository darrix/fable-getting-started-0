var path = require("path");

// check environment
var isProduction = !process.argv.find(v => v.indexOf('webpack-dev-server') !== -1);
console.log('Bundling for ' + (isProduction ? 'production' : 'development') + '...');

module.exports = {
    mode: "development",
    entry: "./src/App.fsproj",
    output: {
        path: path.join(__dirname, "./public"),
        filename: "main.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "./dist")
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    module: {
        rules: [{
            test: /\.fs(x|proj)?$/,
            use: "fable-loader"
        }]
    }
}