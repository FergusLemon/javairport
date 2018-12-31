'use stict';
function Weather() {
  this.weatherBoundary = 0.8;
  this.stormy = null;
};

Weather.prototype.createConditions = function() {
  var randomness = Math.random();
  this.stormy = (randomness <= this.weatherBoundary ? false : true);
};

Weather.prototype.isStormy = function() {
  return this.stormy;
};
