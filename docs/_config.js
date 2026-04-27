module.exports = {
  trailingSlash: false,
  async rewrites() {
    return [
      {
        source: '/real-estate',
        destination: '/real-estate/index.html'
      }
    ]
  }
}