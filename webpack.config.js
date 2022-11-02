const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { webpack } = require('webpack');
const { argv } = require('process');

module.exports = {
    // set the mode (production or development)
    mode: 'production',

    // set entry
    entry: { 
        bundle: path.resolve(__dirname, './src/index.js'),
   },

    // set output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
        publicPath: '/taskfox/',
    },

    // dev server

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
                use: ['style-loader', 'css-loader']
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
        }),
    ],

    // optimisation
    optimization: {
        moduleIds: 'deterministic', // Added this to retain hash of vendor chunks
        runtimeChunk: 'single',
        // separate all third party runtime chunk files from main chunk
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
}