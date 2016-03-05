import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  authors: DS.attr(),
  googleRating: DS.attr(),
  eBookLink: DS.attr(),
  pdfLink: DS.attr(),
  userRating: DS.attr(),
  inProgress: DS.attr(),
  finished: DS.attr(),
  dateAdded: DS.attr()
});
