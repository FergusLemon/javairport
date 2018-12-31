'use stict';

function Airport() {
  this.DEFAULT_CAPACITY = 100;
  this.capacity = this.DEFAULT_CAPACITY;
  this.planes = [];
};

Airport.prototype.landPlane = function(plane) {
  if(this.isFull()) throw new Error("This airport is full, you cannot land here.");
  plane.land(this);
  this.planes.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  plane.takeOff(this);
  var index = this.planes.indexOf(plane);
  this.planes.splice(index, 1);
};

Airport.prototype.isFull = function() {
  return(this.planes.length >= this.DEFAULT_CAPACITY ? true : false);
};

Airport.prototype.getCapacity = function() {
  return this.capacity;
};
