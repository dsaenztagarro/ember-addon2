import Ember from 'ember';
import config from './config/environment';
import pollServiceRouter from 'ember-poll-service/router';

var Router = Ember.Router.extend({
  location: config.locationType
});

/*
Router.reopen({
  rootURL: '/content/poll-service/'
});
*/

Router.map(function() {
  this.route('content', function() {
    pollServiceRouter(this);
  });
});

export default Router;
