import Ember from 'ember';

export default Ember.Component.extend({
  downloadList: Ember.inject.service(),

  bookHeader: Ember.computed('bookHeader', function() {
    return this.get('book.title') + " by " + this.get('book.authors');
  }),

  actions: {
    add(book) {
      console.log(book);
      console.log("got to the component route?")
      this.get('downloadList').add(book);
    }
  }
});
