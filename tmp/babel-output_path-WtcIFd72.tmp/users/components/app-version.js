define('users/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'users/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _usersConfigEnvironment) {

  var name = _usersConfigEnvironment['default'].APP.name;
  var version = _usersConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});