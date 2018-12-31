'use stict';
function Weather() {
  this.weatherBoundary = 0.8;
};

Weather.prototype.createConditions = function() {
  var randomness = Math.random();
  return(randomness <= this.weatherBoundary ? "Calm" : "Stormy");
};
