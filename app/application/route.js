import Ember from 'ember';

export default Ember.Route.extend({
  //apiKey: AIzaSyCHL6Uqq1ILNlfiJHULfx4zcYPoqpiwuzY,

  actions: {
    search(params) {
      this.transitionTo('search-results', params.searchParams);
    }
  }
});
