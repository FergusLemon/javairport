'use stict';

function Plane() {
  this.inTheAir = false;
  this.location = "Depot";
};

Plane.prototype.takeOff = function(location) {
  this.inTheAir = true;
  this.location = null;
};
