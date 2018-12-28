'use strict';

describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe("inTheAir", function() {
    it("returns false when a plane is on the ground", function() {
      expect(plane.inTheAir).toEqual(false);
    });
  });

  describe("Take Off", function() {
    it("means the plane is now in the air", function() {
      plane.takeOff(plane.location);
      expect(plane.inTheAir).toEqual(true);
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
});
