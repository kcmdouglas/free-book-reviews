import Ember from 'ember';

export function googleStarRating(params) {
  var rating = params[0] ;
  var ratingString = "";
  console.log(rating)
  if (rating !== NaN) {
    for(var i = 0; i <= rating - 1; i++) {
      ratingString += '<span class="glyphicon glyphicon-star"></span>';
    }
  } 

  return Ember.String.htmlSafe(ratingString);

}

export default Ember.Helper.helper(googleStarRating);
