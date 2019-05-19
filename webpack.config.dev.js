
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//path.resolve()方法将路径或路径片段的序列解析为绝对路径
//如果没有传入 path 片段，则 path.resolve() 将返回当前工作目录的绝对路径
const srcRoot = path.resolve(__dirname,'src')
const devPath = path.resolve(__dirname, 'dev')
const pageDir = path.resolve(srcRoot, 'page')
const fs = require('fs')
const mainFile = 'index.js'

function getEntry() {
  let entryMap = {}

  fs.readdirSync(pageDir).forEach((pathname) => {
    let fullPathName = path.resolve(pageDir, pathname) //文件系统的绝对路径
    let stat = fs.statSync(fullPathName)//判断是否为文件
    let fileName = path.resolve(fullPathName, mainFile)

    if(stat.isDirectory() && fs.existsSync(fileName)){
      entryMap[pathname] = fileName
    }

  })

  return entryMap
}

function getHtmlArray(entryMap) {
  let htmlArray = []
  Object.keys(entryMap).forEach((key) => {
    let fullPathName = path.resolve(pageDir, key)
    let fileName = path.resolve(fullPathName, key + '.html')

    if(fs.existsSync(fileName)){
      htmlArray.push(new HtmlWebpackPlugin({
        fileName: key + '.html',
        template: fileName,
        chunks: [key]
      }))
    }
  })
  return htmlArray
}

const entryMap = getEntry()
const htmlArray = getHtmlArray(entryMap)

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: devPath
  },
  entry: entryMap,
  output: {
    path: devPath,
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: [{loader:'babel-loader'}],include:srcRoot},
      {test: /\.css$/, use: ['style-loader', 'css-loader'], include: srcRoot},
      {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'], include: srcRoot},
      {test: /\.(png|jpg|jpeg)/, use: ['url-loader?limit=8192'], include: srcRoot}
    ]
  },
  plugins:[
  ].concat(htmlArray)

}
