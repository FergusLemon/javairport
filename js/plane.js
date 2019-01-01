'use stict';

function Plane() {
  this.inFlight = false;
  this.location = "Depot";
};

Plane.prototype.takeOff = function(origin) {
  if(this.isFlying()) throw new Error("This plane is already in the air.");
  if(origin !== this.location) throw new Error("This plane is at a different location.");
  this.inFlight = true;
  this.location = null;
};

Plane.prototype.land = function(destination) {
  if(!this.isFlying()) throw new Error("This plane is already on the ground.");
  this.inFlight = false;
  this.location = destination;
};

Plane.prototype.isFlying = function() {
  return(this.inFlight ? true : false);
};

Plane.prototype.getLocation = function() {
  return this.location;
};
