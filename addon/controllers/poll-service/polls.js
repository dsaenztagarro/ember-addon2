import Ember from 'ember';
import BaseController from 'ember-poll-service/controllers/base';

export default BaseController.extend({
  polls: Ember.computed.reads('model.polls'),
  actions: {
    editPoll(poll) {
      this.client().transitionToRoute('poll.edit', poll.id);
    },
    publishPoll(poll) {
      console.log('controller:polls:publish-poll ' + poll);
    },
    deletePoll(poll) {
      console.log('controller:polls:destroy-poll ' + poll);
    }
  }
});
