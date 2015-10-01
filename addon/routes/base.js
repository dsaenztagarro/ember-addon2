import Ember from 'ember';
import RouterRoutingWrapper from 'ember-core/wrappers/routing/router';

/**
 * BaseRoute is the base class for all routes
 *
 * @private
 * @class BaseRoute
 */
export default Ember.Route.extend({
  menuService: Ember.inject.service('poll-service.menu'),
  cacheService: Ember.inject.service('cache'),

  init() {
    var routingWrapper = RouterRoutingWrapper.create({
      namespace: 'content.poll-service', router: this
    });
    this.set('routingWrapper', routingWrapper);
  },

  /**
   * Returns an object for internal actions inside the client app
   *
   * @method client
   * @return {RoutingWrapper}
   */
  client() {
    return this.get('routingWrapper');
  }
});
