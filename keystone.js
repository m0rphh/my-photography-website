// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Next app
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });


// Require keystone
var keystone = require('keystone');


// signin logo
keystone.set('signin logo', '/static/assets/images/goran-matejin-logo.png');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'matejin-photography',
	'brand': 'matejin-photography',
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cloudinary config': 'cloudinary://869712868579844:ouXXDlNx8vGMvf0FOGcrJSUBSJw@dj6ppswvb',
	// 'signin logo': ['/static/assets/images/goran-matejin-logo.png', 180, 180],
});


// Load your project's Models
keystone.import('models');

// Start Next app
app.prepare()
	.then(() => {

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
// keystone.set('routes', require('./routes'));
keystone.set('routes', require('./routes')(app));

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	posts: ['posts', 'post-categories'],
	galleries: 'galleries',
	enquiries: 'enquiries',
	users: 'users',
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();

});
