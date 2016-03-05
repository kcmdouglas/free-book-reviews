import Ember from 'ember';

export default Ember.Service.extend({
  downloads: [],

  add(book) {
    console.log("made it to the service")
    console.log(book);
    this.get('downloads').pushObject(book)
  },

  remove(book) {
    this.get('downloads').removeObject(book);
  }
});
