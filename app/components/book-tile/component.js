import Ember from 'ember';

export default Ember.Component.extend({
  downloadList: Ember.inject.service(),
  
  sortProperties: ['dateAdded:desc'],
  sortedBooks: Ember.computed.sort('books', 'sortProperties'),

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
