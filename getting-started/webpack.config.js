// webpack.config.js
// `webpack` command will pick up this config setup by default

// 웹팩 설정파일!


//node.js의 모듈 문법 (common.js : require이용)
//path라는 node js의 라이브러리를 들고 와서 path라는 변수에 담음

//path: path.resolve(__dirname, 'dist') -> path라는 API 사용 
// -> 유효한 경로를 잡아주는 API!! 

var path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};