import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    var searchUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + params.searchParams + '&filter=free-ebooks&key=AIzaSyCHL6Uqq1ILNlfiJHULfx4zcYPoqpiwuzY';
    console.log(params);
    console.log(params.searchParams);
    return Ember.$.getJSON(searchUrl).then(function(responseJSON) {
      var searchResults = [];
      var searchArrays = responseJSON.items
      console.log(responseJSON.items);
      searchArrays.forEach(function(searchResult) {
        searchResults.push(searchResult);
      });
      return searchResults;
    });
  },

  actions: {
    addBook(params) {
      var newFavoriteBook = this.store.createRecord('favorite-book', params);
      newFavoriteBook.save();
    }
  }

});
