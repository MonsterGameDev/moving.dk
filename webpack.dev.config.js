const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    mode: 'development',
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
                use: ['style-loader', 'css-loader'] //[MiniCssExtractPlugin.loader, 'css-loader'], 
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'], //[MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] 
            },
            { // template for htmlfilesd
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }

        ]
    },
    devServer: {
        port: 9000,
        static: {
            directory: path.resolve(__dirname, './dist'), //let webpack-dev-server look into the dist folder
        },
        devMiddleware: {
            index: 'index.html',  // prolly not nessesary,  tells wevpack-dev-server that the startfile is named index.htmnl
            writeToDisk: true, // or it will run it all in memory
        }
    },
    plugins: [
        new HtmlWebpackPlugin({ // creates the page using the hbs template
            title: '-MOVING.DK-',
            template: './src/templates/index.hbs',
            description: 'Flytninger - Danmark og  Europa'

        })
    ]
}