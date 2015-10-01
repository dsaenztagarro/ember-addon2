import Ember from 'ember';

export default Ember.Controller.extend({
  polls: Ember.computed.reads('model.polls')
});
