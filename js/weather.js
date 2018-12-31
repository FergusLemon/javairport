'use stict';
function Weather() {
  this.weatherBoundary = 0.8;
  this.calm = null;
  this.stormy = null;
};

Weather.prototype.createConditions = function() {
  var randomness = Math.random();
  if(randomness <= this.weatherBoundary) {
    this.calm = true;
    this.stormy = false;
  } else {
    this.calm = false;
    this.stormy = true;
  }
};
