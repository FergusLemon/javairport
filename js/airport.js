'use stict';

function Airport() {
  this.DEFAULT_CAPACITY = 100;
  this.capacity = this.DEFAULT_CAPACITY;
  this.planes = [];
};

Airport.prototype.landPlane = function(plane) {
  plane.land(this);
  this.planes.push(plane);
};

Airport.prototype.isFull = function() {
  return(this.planes.length >= this.DEFAULT_CAPACITY ? true : false);
};

Airport.prototype.getCapacity = function() {
  return this.capacity;
};
