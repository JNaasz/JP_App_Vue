module.exports = {
  resolve: {
    fallback: {
      "querystring": require.resolve("querystring-es3"),
      "stream": require.resolve("stream-browserify"),
    },
  },
};
