
'use strict';

var config = {

  // Your site title (format: page_title - site_title)
  site_title: 'CDSBF75',
  site_title2: ', Comité de Paris de Savate Boxe Française',

  // The base URL of your site (can use %base_url% in Markdown files)
  base_url: '',

  // Used for the "Get in touch" page footer link
  support_email: '',

  // Footer Text / Copyright
  copyright: 'Copyright &copy; '+ new Date().getFullYear(),

  // Excerpt length (used in search)
  excerpt_length: 400,

  // The meta value by which to sort pages (value should be an integer)
  // If this option is blank pages will be sorted alphabetically
  page_sort_meta: 'sort',

  // Should categories be sorted numerically (true) or alphabetically (false)
  // If true category folders need to contain a "sort" file with an integer value
  category_sort: true,

  // Which Theme to Use?
  theme_dir  : __dirname + '/../themes/',
  theme_name : 'cdsbf75',

  // Specify the path of your content folder where all your '.md' files are located
  // Fix: Needs trailing slash for now!
  // Fix: Cannot be an absolute path
  content_dir : __dirname + '/content/',

  // Where is the public directory or document root?
  public_dir  : __dirname + '/../themes/cdsbf75/public/',

  // The base URL of your images folder,
  // Relative to config.public_dir
  // (can use %image_url% in Markdown files)
  image_url: '/images',

  // Add your analytics tracking code (including script tags)
  analytics: "<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-2767287-18', 'auto');ga('send', 'pageview');</script>",

  // Set to true to enable the web editor
  allow_editing : true,

  // Set to true to enable HTTP Basic Authentication
  authentication : true,
  credentials    : {
    username : 'admin',
    password : 'sbf2016'
  },

  locale: 'fr',

  // Set to true to render suitable layout for RTL languages
  rtl_layout: false,

  // Edit Home Page title, description, etc.
  home_meta : {
    //title       : 'Custom Home Title',
    //description : 'Custom Home Description'
  }

};

// Exports
module.exports = config;
