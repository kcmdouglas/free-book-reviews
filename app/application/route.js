import Ember from 'ember';

export default Ember.Route.extend({
  //apiKey: AIzaSyCHL6Uqq1ILNlfiJHULfx4zcYPoqpiwuzY,

  actions: {
    search(params) {
      console.log("Made it to Application route");
      console.log(params.searchParams);
      this.transitionTo('search-results', params.searchParams);
    }
  }
});
