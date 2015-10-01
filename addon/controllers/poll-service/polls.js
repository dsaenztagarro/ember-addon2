import Ember from 'ember';

export default Ember.Controller.extend({
  polls: Ember.computed.reads('model.polls'),
  actions: {
    edit(poll) {
      console.log('controller:polls:edit-poll (2)' + poll);
    },
    editPoll(poll) {
      console.log('controller:polls:edit-poll ' + poll);
    }
  }
});
