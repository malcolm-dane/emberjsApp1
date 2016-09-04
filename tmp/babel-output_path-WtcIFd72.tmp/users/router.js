define('users/router', ['exports', 'ember', 'users/config/environment'], function (exports, _ember, _usersConfigEnvironment) {

	var Router = _ember['default'].Router.extend({
		location: _usersConfigEnvironment['default'].locationType,
		rootURL: _usersConfigEnvironment['default'].rootURL
	});

	Router.map(function () {
		this.route('users');
		this.route('albums', { path: 'albums/:user_id' });
		this.route('photos', { path: 'photos/:album_id' });
	});

	exports['default'] = Router;
});