const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // set the mode (production or development)
    mode: 'development',

    // set entry
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },

    // set output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
        publicPath: '/taskfox/'
    },

    // dev server
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },

    // plugins
    plugins: [
        new htmlWebpackPlugin({
            title: 'Taskfox: a productivity app',
            filename: 'index.html',
            template: 'src/template.html',
        })
    ],
}