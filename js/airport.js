'use stict';

function Airport() {
  this.DEAFULT_CAPACITY = 100;
  this.planes = [];
};

Airport.prototype.landPlane = function(plane) {
  this.planes.push(plane);
};
