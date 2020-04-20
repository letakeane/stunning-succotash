var Plant = require('./plant.js');

class Garden {
  constructor(sun) {
    this.sun = sun;
    this.timesWatered = 0;
    this.seeds = [];
    this.type = 'potato'
  }
  
  plantSeeds(type, sun, water) {
    var newPlant = new Plant(type, sun, water);

    this.seeds.push(newPlant);
  }

  water() {
    this.timesWatered++;

    for (var i = 0; i < this.seeds.length; i++) {
      this.seeds[i].sprouted = true;
      
        if (this.timesWatered === this.seeds[i].water) {
          this.seeds[i].ripe = true
        }
    }
  }
}

module.exports = Garden;