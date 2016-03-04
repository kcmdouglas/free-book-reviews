import Ember from 'ember';

export default Ember.Component.extend({
  // searchParams:
  // modifiedSearchResults:

  actions: {
    search() {
      console.log("Made it to component route");
      var params = {
        searchParams: this.get('searchQuery'),
      };
      console.log(params.searchParams)
      this.sendAction("search", params);
      //this.transitionTo('search-results', params);
    }
  }

});
