const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        path:require('path').resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin()
    ]
}
// npm install 
// npm run dev