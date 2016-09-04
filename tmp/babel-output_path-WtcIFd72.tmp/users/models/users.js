define('users/models/users', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		name: _emberData['default'].attr(),
		email: _emberData['default'].attr()
	});
});