define('users/models/photos', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		title: _emberData['default'].attr(),
		thumbnailUrl: _emberData['default'].attr()
	});
});