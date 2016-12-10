/**
 * Created by plter on 2016/12/10.
 */

module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=100000!img?progressive=true'},
            {test: /\.js$/,loader: 'babel-loader'}
        ]
    }
};