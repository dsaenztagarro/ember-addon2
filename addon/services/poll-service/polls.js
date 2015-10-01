import Ember from 'ember';

export default Ember.Service.extend({
	fetchAll: function() {
		return [{
      id: 1,
			name: 'vote-favourite-couple-valentines-day',
		}, {
      id: 2,
			name: 'vote-hello-cover-2014',
		}];
	}
});
