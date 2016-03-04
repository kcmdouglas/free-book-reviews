import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],

  add(book) {
    this.get('favorites').addObject(book);
  },

  remove(result) {
    this.get('favorites').removeObject(result);
  }


});
