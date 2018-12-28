'use stict';

function Airport() {
  this.DEAFULT_CAPACITY = 100;
  this.planes = [];
};

Airport.prototype.landPlane = function(plane) {
  plane.land(this);
  this.planes.push(plane);
};
