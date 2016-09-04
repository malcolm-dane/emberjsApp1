define('users/models/albums', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		title: _emberData['default'].attr()
	});
});