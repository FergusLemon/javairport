'use strict';

describe("Plane", function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('Airport', ['landPlane'])
  });

  describe("inFlight", function() {
    it("returns false when a plane is on the ground", function() {
      expect(plane.inFlight).toEqual(false);
    });
  });

  describe("Location", function() {
    it("defaults to 'Depot' for new planes", function() {
      expect(plane.location).toEqual("Depot");
    });
    it("is null when the plane is flying", function() {
      plane.takeOff(plane.location);
      expect(plane.location).toBeNull();
    });
  });

  describe("Take Off", function() {
    it("puts the plane in the air", function() {
      plane.takeOff(plane.location);
      expect(plane.inFlight).toEqual(true);
    });
  });

  describe("Land", function() {
    it("puts the plane on the ground", function() {
      plane.land(airport);
      expect(plane.inFlight).toEqual(false);
    });
    it("updates the plane's location to the aiport it lands at", function() {
      plane.land(airport);
      expect(plane.location).toEqual(airport);
    });
  });
});
