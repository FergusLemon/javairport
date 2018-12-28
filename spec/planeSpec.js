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
      plane.takeOff();
      expect(plane.inTheAir).toEqual(true);
    });
  });
});
