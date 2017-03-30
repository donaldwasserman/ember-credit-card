/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import { setupComponentTest } from 'ember-mocha';

describe('Unit: Component: credit-card', function() {
  setupComponentTest('credit-card', {
    needs: []
  });

  it('renders', function() {
    // creates the component instance
    var component = this.subject();
    expect(component._state).to.equal('preRender');

    // renders the component on the page
    this.render();
    expect(component._state).to.equal('inDOM');
  });

  it('accetps `width` option', function() {
    // creates the component instance
    var component = this.subject(),
        card = null;
    component.set('width',111);
    this.render();
    card = component.get('card');
    expect(card.options.width).to.equal(111);

  });

  it('accetps `formatting` option', function() {
    // creates the component instance
    var component = this.subject(),
        card = null;
    component.set('formatting',false);
    this.render();
    card = component.get('card');
    expect(card.options.formatting).to.equal(false);

  });

  it('accetps `values` option', function() {
    // creates the component instance
    var component = this.subject(),
        card = null;
    component.set('values',{number:'nuuuumber'});
    this.render();
    card = component.get('card');
    expect(card.options.values.number).to.equal('nuuuumber');

  });
});
