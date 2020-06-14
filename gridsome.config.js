// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/style/*.scss'),
      ],
    });
}

module.exports = {
  siteName: 'Gridsome',
  templates: {
    WordPressCategory: '/category/:slug', // adds a route for the "category" post type (Optional)
    WordPressPost: '/:year/:month/:day/:slug', // adds a route for the "post" post type (Optional)
    WordPressPostTag: '/tag/:slug' // adds a route for the "post_tag" post type (Optional)
  },
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'http://api.rotondapizza.loc', // required
        //apiBase: 'wp-json',
        typeName: 'WordPress',
        perPage: 100,
        concurrent: 10
      }
    }
  ]
}