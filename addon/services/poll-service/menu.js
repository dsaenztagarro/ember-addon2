import Ember from 'ember';

var config = {
  'content.example.route': [
    {
      name: 'main',
      routeName: 'content.poll-service.main'
    }, {
      name: 'details',
      routeName: 'content.poll-service.details'
    }
  ]
};

export default Ember.Service.extend({
  init() {
    this.set('config', config);
  },

  getTabs(route) {
    return this.get('config')[route.routeName];
  }
});
