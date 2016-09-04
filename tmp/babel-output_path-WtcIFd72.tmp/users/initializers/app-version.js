define('users/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'users/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _usersConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_usersConfigEnvironment['default'].APP.name, _usersConfigEnvironment['default'].APP.version)
  };
});