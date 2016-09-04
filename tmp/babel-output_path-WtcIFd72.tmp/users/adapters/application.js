define('users/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].RESTAdapter.extend({
		host: 'http://jsonplaceholder.typicode.com'
	});
});