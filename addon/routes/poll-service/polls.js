import Ember from 'ember';
import BaseRoute from 'ember-poll-service/routes/base';

export default BaseRoute.extend({
  pollsService: Ember.inject.service('poll-service.polls'),
  model() {
		var polls = this.get('pollsService').fetchAll(); /* the list of polls */
    var context = { polls: polls };
    return context;
  }
});
