const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');
const open = require('open');
const  host = 'localhost';
const  port = 3000;
new WebpackDevServer(webpack(config), {
  quiet:true,
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true,
        stats: {
            colors: true // color is life
        }
    })
    .listen(port, host, (err) => {
        if (err) {
            console.log(err);
        }
        console.log(`Listening at ${host}:${port}`);
        open(`http://${host}:${port}`);
    });
