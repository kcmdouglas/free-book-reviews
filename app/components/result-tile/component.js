import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addBook(result) {
      var params = {
        title: result.volumeInfo.title,
        authors: result.volumeInfo.authors,
        googleRating: result.volumeInfo.averageRating || '',
        eBookLink: result.accessInfo.epub.downloadLink || '',
        pdfLink: result.accessInfo.pdf.downloadLink || '',
        userRating: '',
        inProgress: false,
        finished: false,
        dateAdded: Date.now()
      }
      this.sendAction("addBook", params);
    }
  }
});
