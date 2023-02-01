const HtmlWebpackPlugin = require('html-webpack-plugin')
const json = require('./src/sales.json');

module.exports ={
    module: {
        //Rules defines webpack and what it needs to do based on certain file types it encounters
        rules: [
            {
                //find files with end wit .js or .jsx
                test: /\.(js|jsx)$/,
                //we don`t want to build any of our node_module code. The packages are already optimized
                exclude: /node_modules/,
                //what loader needs to be run
                use: {
                //babel looks inside root for .babelrc
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                //loaders evaluate from right to left
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
            
        ],
    },
    plugins: [
        
        // bring plugin into webpack config file and load it to index.html
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}