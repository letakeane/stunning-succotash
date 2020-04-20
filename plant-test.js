var Plant = require('./plant.js');
var assert = require('chai').assert;

describe('Plant', function() {
  it('should have a type', function() {
    var daisy = new Plant('daisy');
    var sunflower = new Plant('sunflower');

    assert.equal(daisy.type, 'daisy');
    assert.equal(sunflower.type, 'sunflower');
  });

  it('should be able to have a preferred sunlight', function() {
    var rose = new Plant('rose', 'full');
    var carrot = new Plant('carrot', 'partial');

    assert.equal(rose.sun, 'full');
    assert.equal(carrot.sun, 'partial');
  });

  it('should be able to have a preferred water amount', function() {
    var cucumber = new Plant('cucumber', 'partial', 8);
    var rice = new Plant('rice', 'full', 10);
    var cactus = new Plant('cactus', 'full', 1);

    assert.equal(cucumber.water, 8);
    assert.equal(rice.water, 10);
    assert.equal(cactus.water, 1);
  });

  it('should have default sun/water preferences', function() {
    var okra = new Plant('okra');

    assert.equal(okra.sun, 'indirect');
    assert.equal(okra.water, 5);
  });

  it('should start out not sprouted', function() {
    var okra = new Plant('okra', 'shade', 4);

    assert.equal(okra.sprouted, false);
  });

  it('should start out not ripe', function() {
    var strawberry = new Plant('strawberry');

    assert.equal(strawberry.ripe, false);
  })
});