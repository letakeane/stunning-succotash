class Plant {
  constructor(type, sun, water) {
    this.type = type;
    this.sun = sun || 'indirect';
    this.water = water || 5;
    this.sprouted = false;
    this.ripe = false;
  }
}

module.exports = Plant;