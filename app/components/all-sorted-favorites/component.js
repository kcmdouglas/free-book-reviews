import Ember from 'ember';

export default Ember.Component.extend({
  sortProperties: ['dateAdded:desc'],
  sortedBooks: Ember.computed.sort('book', 'sortProperties'),
});
