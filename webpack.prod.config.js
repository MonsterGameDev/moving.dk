const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|webp)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'], //['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] //['style-loader', 'css-loader', 'sass-loader']
            },
            { // erase this if babel fucks up
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],  //compiles to ECMA5
                        plugins: [] // array of specific hacks 
                    }
                }
            },
            { // template for htmlfilesd
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            title: '-MOVING.DK-',
            template: './src/templates/index.hbs',
            description: 'Flytninger - Danmark og  Europa'

        })
    ]
}