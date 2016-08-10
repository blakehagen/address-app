angular.module('addressApp')
  .constant('AUTH_EVENTS', {
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  })

  .constant('API', {
    SERVER_LOCAL: 'http://localhost:4500/api/v1/',
    SERVER_HEROKU: 'http://address-app-server.herokuapp.com/api/v1/'
  });