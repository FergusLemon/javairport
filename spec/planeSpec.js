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
});
