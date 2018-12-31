'use stict';
function Weather() {

};

Weather.prototype.createConditions = function() {
  var randomness = Math.random();
  return(randomness < 0.8 ? "Calm" : "Stormy");
};
