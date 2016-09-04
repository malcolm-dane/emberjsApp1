define('users/app', ['exports', 'ember', 'users/resolver', 'ember-load-initializers', 'users/config/environment'], function (exports, _ember, _usersResolver, _emberLoadInitializers, _usersConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _usersConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _usersConfigEnvironment['default'].podModulePrefix,
    Resolver: _usersResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _usersConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});