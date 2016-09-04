define('users/routes/photos', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(params) {
			return this.get('store').query('photos', { albumId: params.album_id });
		}
	});
});