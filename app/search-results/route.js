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
  }

});
// 
// model: function(params) {
//   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&zip=' + params.zipcode;
//   return Ember.$.getJSON(url).then(function(responseJSON) {
//     var legislators = [];
//     responseJSON.results.forEach(function(legislator) {
//       legislators.push(legislator);
//     });
//     return legislators;
//   });
//  }
