const extraWebpackConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "eslint-loader",
        include: /src/,
      },
      {
        test: /\.md$/,
        loader: "html-loader!markdown-loader",
        exclude: /node_modules/,
      },
    ],
  },
}

// eslint-disable-next-line
module.exports = {
  type: "react-component",
  polyfill: false,
  npm: {
    cjs: true,
    esModules: true,
    umd: {
      global: "ReactSvgPiechart",
      externals: {
        react: "React",
        "prop-types": "PropTypes",
      },
    },
  },
  uglify: false,
  webpack: {
    extra: extraWebpackConfig,
  },
}
