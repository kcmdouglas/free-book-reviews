import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('all-favorite-books', 'Integration | Component | all favorite books', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{all-favorite-books}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#all-favorite-books}}
      template block text
    {{/all-favorite-books}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
