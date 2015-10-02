import BaseRoute from 'ember-poll-service/routes/base';

export default BaseRoute.extend({
  beforeModel() {
		this.client().transitionTo('polls');
  }
});
