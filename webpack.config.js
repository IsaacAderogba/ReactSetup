const path = require('path');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [new BundleAnalyzer()],
  devtool: 'source-map',

  // 'production' mode would minify and uglify the code, and use React's production code
  mode: 'development',
  // entry is the starting point for the web made by our files through imports and exports
  entry: path.resolve(__dirname, 'index.js'),
  // all code will get concatenated into a single bundle.js inside a bundle folder
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'bundle.js',
  },
  // types of files we want Webpack to bundle
  resolve: {
    extensions: ['.js', '.jsx', '.less'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }],
      },
    ],
  },
};
