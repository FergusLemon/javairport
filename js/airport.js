'use stict';

function Airport(weather, capacity = 100) {
  this.weather = (typeof weather !== 'undefined') ? weather : new Weather();
  this.DEFAULT_CAPACITY = 100;
  this.capacity = capacity;
  this.planes = [];
};

Airport.prototype.landPlane = function(plane) {
  if(this.weather.isStormy()) throw new Error("It is too stormy to land at this airport.");
  if(this.isFull()) throw new Error("This airport is full, you cannot land here.");
  plane.land(this);
  this.planes.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  if(this.weather.isStormy()) throw new Error("It is too stormy to take off from this airport.");
  plane.takeOff(this);
  var index = this.planes.indexOf(plane);
  this.planes.splice(index, 1);
};

Airport.prototype.isFull = function() {
  return(this.planes.length >= this.capacity ? true : false);
};

Airport.prototype.getCapacity = function() {
  return this.capacity;
};
