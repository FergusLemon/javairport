'use stict';

function Plane() {
  this.inTheAir = false;
};

Plane.prototype.takeOff = function() {
  this.inTheAir = true;
};
