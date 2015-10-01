import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editPoll(poll) {
      this.sendAction('editPoll', poll);
    },
    publishPoll(poll) {
      this.sendAction('publishPoll', poll);
    },
    deletePoll(poll) {
      this.sendAction('deletePoll', poll);
    }
  }
});
