define('users/routes/albums', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(params) {
			return this.get('store').query('albums', { userId: params.user_id });
		}
	});
});