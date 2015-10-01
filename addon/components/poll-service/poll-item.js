import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit(poll) {
      this.sendAction('edit', poll);
    },
    publish(poll) {
      this.sendAction('publish', poll);
    },
    destroy(poll) {
      this.sendAction('delete', poll);
    }
  }
});
