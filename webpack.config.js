module.exports = {
    entry: __dirname + '/source/js/app.js',
    output: {
        path: __dirname + '/dist/js',
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        colors: true,
        progress: true
    },
    jshint: {
        'esnext': true
    },
    module: {
        preLoaders: [
            { test: /\.js?/, exclude: __dirname + '/node_modules', loaders: ['eslint'] }
        ],
        loaders: [
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
            { test: /\.js$/, loader: 'babel', exclude: __dirname + '/node_modules' },
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
            { test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000' },
            { test: /\.jpg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000' },
            { test: /\.gif(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' }
        ]
    }
};
