const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

const { styles } = require('@ckeditor/ckeditor5-dev-utils');

module.exports = {
    performance: { hints: false },

    entry: {
        ckeditor: path.resolve(__dirname, 'src/js', 'ckeditor.js'),
        mathtype: path.resolve(__dirname, 'src/js', 'mathtype.js'),
        responsive: path.resolve(__dirname, 'src/js/includes', 'device_detect.js'),
        mathConfig: path.resolve(__dirname, 'src/js/constant', 'mathConfig.js')
    },

    output: {
        // The name under which the editor will be exported.
        library: 'CKEditor',
        publicPath: 'auto',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        libraryExport: 'default',
        clean: true
    },

    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                terserOptions: {
                    output: {
                        // Preserve CKEditor 5 license comments.
                        comments: /^!/
                    }
                },
                extractComments: false
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [ 'raw-loader' ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'singletonStyleTag',
                            attributes: {
                                'data-cke': true
                            }
                        }
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: styles.getPostCssConfig({
                                themeImporter: {
                                    themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
                                },
                                minify: true
                            })
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ]
    },

    target: 'web',
    cache: false,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000
    },
    devServer: {
        static: './dist',
        open: true,
        compress: true,
        hot: false,
        port: 2050
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            filename: 'ckeditor.html', template: 'src/ckeditor.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'ckeditor_media.html', template: 'src/ckeditor_media.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'mathtype.html', template: 'src/mathtype.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'mathtype_trim.html', template: 'src/mathtype_trim.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'mathtype_enhancement.html', template: 'src/mathtype_enhancement.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'chemtype.html', template: 'src/chemtype.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html', template: 'src/index.html',
            inject: false
        }),
        new webpack.NormalModuleReplacementPlugin(
            /font-size\.svg/,
            path.resolve(__dirname, 'src/img/replace', 'font-size.svg')
        ),
        new CopyPlugin({
            patterns: [
                { from: "src/source", to: "source" },
            ],
        }),
        // new CKEditorWebpackPlugin( {
        //     // UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
        //     // When changing the built-in language, remember to also change it in the editor's configuration (src/ckeditor.js).
        //     language: 'en',
        //     additionalLanguages: 'all'
        // } ),
        // new webpack.BannerPlugin( {
        //     banner: bundler.getLicenseBanner(),
        //     raw: true
        // } )
    ]
};