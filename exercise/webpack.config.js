var path = require('path')
var webpack = require('webpack')

module.exports = {

  //webpack 3버전에서는 mode ( none, production, .. ) 불필요하게 됨
//   mode: 'production',

//대상 파일 진입점 
  entry: './src/main.js',

  //public path : 배포 후 cdn과 관계된 속성 
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },

  //loader의 속성 정의하는 곳 : module
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,

        //최대한 많은 브라우저에서 js 호환가능하게 문법 변환해주는 도구. 웹팩에서 사용 가능! -> 편리
        loader: 'babel-loader',

        // 라이브러리와 관련된 폴더. 변환할 필요 없음. 따라서 배제.
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  //웹팩으로 파일의 연관관계를 해석해나갈 때 관계 정의할 수 있는 부분 
  resolve: {
    alias: {
        //별칭으로 연결. webpack으로 연결할 때 vue$ 사용하면 이 지점이라고 별칭 준 것
      'vue$': 'vue/dist/vue.esm.js'
    },
    // 이 확장자 파일들에 대해서는 확장자를 붙이지 않아도 된다. 
    // import { } from './math' ( 확장자 생략)
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },

  // 성능 관련된 힌트를 주는 설정. 
  // 결과물의 사이즈 파일 크기 초과되면 warning을 주는 부분
  performance: {
    hints: false
  },
  // 개발자 도구에서 빌드된 파일과 실제 파일 연결해주는 링크 제공해줌 
  devtool: '#eval-source-map'
}



// env : 노드 환경 변수
// env를 production 모드일 때 ( 배포를 할 때)
// 추가적으로 넣어줄 사항들 
// webpack 4버전부터는 이것을 추가할 필요없이 mode: production으로 두면 자동적으로 해줌.
// 4버전부터는 설정 신경 안쓰고 mode만 추가하면 적절한 환경 세팅해주겠다는 철학

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }