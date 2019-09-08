var path = require('path');

module.exports = {
    mode: 'production',
    entry: './useFunctionDebouncer.js',
    output: {
        path: path.resolve('lib'),
        filename: 'useFunctionDebouncer.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}