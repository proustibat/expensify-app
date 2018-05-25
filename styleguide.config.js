const path = require('path');
process.env.NODE_ENV = 'styleguidist';
module.exports = {
    defaultExample: true,
    title: 'Expensify App Style Guide',
    components: 'src/components/**/*.js',
    webpackConfig: require('./webpack.config'),
    ribbon: {
        url: 'https://github.com/proustibat/expensify-app',
    },
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'lib/styleguide/Wrapper.js')
    }
    // webpackConfig: function(env) {
    //     const CSSExtract = new ExtractTextPlugin( 'styles.css' );
    //     return {
    //         entry: [
    //             'babel-polyfill',
    //             './src/app.js'
    //         ],
    //
    //         output: {
    //             path: path.join( __dirname, 'public', 'dist' ),
    //             filename: 'bundle.js'
    //         },
    //
    //         module: {
    //             rules: [ {
    //                 loader: 'babel-loader',
    //                 test: /\.js$/,
    //                 exclude: /node_modules/
    //             }, {
    //                 test: /\.(s*)css$/,
    //                 use: CSSExtract.extract( {
    //                     use: [
    //                         {
    //                             loader: 'css-loader',
    //                             options: {
    //                                 sourceMap: true
    //                             }
    //                         },
    //                         {
    //                             loader: 'sass-loader',
    //                             options: {
    //                                 sourceMap: true
    //                             }
    //                         }
    //                     ]
    //                 } )
    //             } ]
    //         },
    //
    //         plugins: [
    //             CSSExtract,
    //             new webpack.DefinePlugin( {
    //                 'process.env.FIREBASE_API_KEY': JSON.stringify( process.env.FIREBASE_API_KEY ),
    //                 'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify( process.env.FIREBASE_AUTH_DOMAIN ),
    //                 'process.env.FIREBASE_DATABASE_URL': JSON.stringify( process.env.FIREBASE_DATABASE_URL ),
    //                 'process.env.FIREBASE_PROJECT_ID': JSON.stringify( process.env.FIREBASE_PROJECT_ID ),
    //                 'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify( process.env.FIREBASE_STORAGE_BUCKET ),
    //                 'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify( process.env.FIREBASE_MESSAGING_SENDER_ID )
    //             } )
    //         ],
    //
    //         devtool: 'inline-source-map',
    //
    //         devServer: {
    //             contentBase: path.join( __dirname, 'public' ),
    //             publicPath: '/dist/',
    //             historyApiFallback: true
    //         }
    //     }
    // },
}
