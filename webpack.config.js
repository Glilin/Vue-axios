var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 配置文件：都是指应用程序执行前的文件
// 意味着，如果修改了配置文件，需要重新打包构建
// 在这里要返回一个配置对象
module.exports = {
    // 入口和输出的作用就是：告诉webpack将什么文件打包构建为那个目录下的什么文件
    // 设置入口：源文件路径:相对路径
    entry: './src/app.js',
    // 设置输出：目标文件的文件目录和文件名称
    output: {
        // path:'目录', 输出的路径，webpack2起就规定必须是绝对路径
        // path:__dirname + '/dist',
        path: path.join(__dirname, 'dist'),
        // filename:'文件名称'
        filename: 'main.js'
    },
    // 配置dev-serve
    // devServer: {
    //     // 设置对外的公共路径，意味着资源就会放在这个公共路径中，其他人可以访问
    //     publicPath: '/dist'
    //     // contentBase: path.join(__dirname, 'dist'),
    //     // compress: true,
    //     // port: 9000 //不设置默认为8080
    // },
    // 下面添加对不同类型的文件支持
    module: {
        // 解析规则：说白了，就是什么类型的文件我应该调用那种loaer进行解析
        rules: [
            // 0:添加对vue单文件组件的支持
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 里面就是一个一个的具体的配置
            // 1.添加对css文件的支持
            {
                // 正则表达式：说明所有以.css结尾的文件，都会use指定的loader进行解析处理
                test: /\.css$/i,
                // 1.底层调用loader的时候是从右到左
                // 2.css-loader：能够解析css文件，将代码转换为浏览器所能识别的代码
                // 3.style-loader：可以将解析后的代码自动的添加到页面中
                use: ['style-loader', 'css-loader'],
            },
            // 添加对less的支持
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            },
            // 添加图片和图标的配置支持
            {
                // png|jpg|gif:常见的图片资源
                // eot|svg|ttf|woff:字体图标或web字体的字体源文件
                test: /\.(png|jpg|gif|eot|svg|ttf|woff)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // limit表示如果图片大于5000byte，就以路径形式展示，小于的话就用base64格式展示
                        limit: 5000
                    }
                }]
            },
            {
                test: /\.js$/,
                // Webpack2建议尽量避免exclude，更倾向于使用include
                // exclude: /(node_modules)/, // node_modules下面的.js文件会被排除
                include: [path.resolve(__dirname, 'src')],
                use: {
                    loader: 'babel-loader',
                    // options里面的东西可以放到.babelrc文件中去
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    // 引入插件
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ]
}