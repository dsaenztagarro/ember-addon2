export default function(router) {
  router.route('poll-service', function() {
    this.route('polls');
		this.route('poll', { path: '/poll/:poll_id' }, function() {
      this.route('edit');
		});
  });
}
