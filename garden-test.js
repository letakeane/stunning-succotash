var Garden = require('./garden.js');
var Plant = require('./plant.js');
var assert = require('chai').assert;

describe('Garden', function() {
  it('should have an amount of sun it receives', function() {
    var sideYard = new Garden('partial');
    var backYard = new Garden('full');

    assert.equal(sideYard.sun, 'partial');
    assert.equal(backYard.sun, 'full');
  })

  it('should start out not having been watered', function() {
    var garden = new Garden('indirect')

    assert.equal(garden.timesWatered, 0);
  })

  it('should be able to have seeds', function() {
    var garden = new Garden('full');

    assert.deepEqual(garden.seeds, []);
  })

  it('should be able to plant seeds', function() {
    var garden = new Garden('shade');

    garden.plantSeeds('potato', 'shade', 4);

    assert.equal(garden.seeds.length, 1);
    assert.equal(garden.seeds[0].type, 'potato');
    assert.equal(garden.seeds[0].sun, 'shade');
    assert.equal(garden.seeds[0].water, 4);
    assert.instanceOf(garden.seeds[0], Plant);
  })

  it('should be able to plant multiple seeds', function() {
    var garden = new Garden("shade");

    garden.plantSeeds("potato", "shade", 4);
    garden.plantSeeds('tomato', 'partial', 7);

    assert.equal(garden.seeds.length, 2);
    assert.equal(garden.seeds[0].type, "potato");
    assert.instanceOf(garden.seeds[0], Plant);
    assert.equal(garden.seeds[1].type, "tomato");
    assert.instanceOf(garden.seeds[1], Plant);
  })

  it('should be able to be watered', function() {
    var strawberryPatch = new Garden('partial');

    strawberryPatch.plantSeeds('strawberry', 'shade', 3);

    strawberryPatch.water();

    assert.equal(strawberryPatch.timesWatered, 1);
  });

  it('should be able to be sprout plants', function() {
    var strawberryPatch = new Garden('partial');

    strawberryPatch.plantSeeds('strawberry', 'shade', 6);

    assert.equal(strawberryPatch.seeds[0].sprouted, false);

    strawberryPatch.water();

    assert.equal(strawberryPatch.timesWatered, 1);
    assert.equal(strawberryPatch.seeds[0].sprouted, true);
  });

  it('should water all plants at once', function() {
    var garden = new Garden('full');

    garden.plantSeeds('hops', 'full', 3);
    garden.plantSeeds('barley', 'partial', 5);

    assert.equal(garden.seeds[0].sprouted, false);
    assert.equal(garden.seeds[1].sprouted, false);

    garden.water();

    assert.equal(garden.seeds[0].sprouted, true);
    assert.equal(garden.seeds[1].sprouted, true);
  });

  it('should ripen plants by watering the right amount', function() {
    var garden = new Garden('full');

    garden.plantSeeds('aloe', 'full', 2);

    garden.water();

    assert.equal(garden.timesWatered, 1);
    assert.equal(garden.seeds[0].ripe, false);

    garden.water();

    assert.equal(garden.timesWatered, 2);
    assert.equal(garden.seeds[0].ripe, true);
  });

  it('should ripen plants individually', function() {
    var garden = new Garden('partial');

    garden.plantSeeds('strawberry', 'shade', 3);
    garden.plantSeeds('grape', 'full', 5);

    garden.water();
    garden.water();
    garden.water();

    assert.equal(garden.timesWatered, 3);
    assert.equal(garden.seeds[0].ripe, true);
    assert.equal(garden.seeds[1].ripe, false);
    
    garden.water();
    garden.water();
    
    assert.equal(garden.timesWatered, 5);
    assert.equal(garden.seeds[0].ripe, true);
    assert.equal(garden.seeds[1].ripe, true);
  });
})