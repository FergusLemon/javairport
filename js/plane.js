'use stict';

function Plane() {
  this.inFlight = false;
  this.location = "Depot";
};

Plane.prototype.takeOff = function(origin) {
  this.inFlight = true;
  this.location = null;
};

Plane.prototype.land = function(destination) {
  this.inFlight = false;
  this.location = destination;
};
