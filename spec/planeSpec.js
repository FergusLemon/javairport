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
      expect(plane.inFlight).toBe(false);
    });
  });

  describe("getLocation", function() {
    describe("before a plane's first flight", function() {
      it("returns 'Depot'", function() {
        expect(plane.getLocation()).toBe("Depot");
      });
    });
    describe("when a plane is in the air", function() {
      it("returns null", function() {
        plane.takeOff(plane.location);
        expect(plane.getLocation()).toBe(null);
      });
    });
    describe("when a plane has landed", function() {
      it("returns the airport where the plane landed", function() {
        plane.land(airport);
        expect(plane.getLocation()).toBe(airport);
      });
    });
  });

  describe("Take Off", function() {
    it("puts the plane in the air", function() {
      plane.takeOff(plane.location);
      expect(plane.isFlying()).toBe(true);
    });
  });

  describe("Land", function() {
    it("puts the plane on the ground", function() {
      plane.land(airport);
      expect(plane.isFlying()).toBe(false);
    });
    it("updates the plane's location to the aiport it lands at", function() {
      plane.land(airport);
      expect(plane.location).toBe(airport);
    });
  });

  describe("isFlying", function() {
    describe("when a plane is on the ground", function() {
      it("returns false", function() {
        expect(plane.isFlying()).toBe(false);
      });
    });
    describe("when a plane is in the air", function() {
      it("returns true", function() {
        plane.takeOff(plane.location);
        expect(plane.isFlying()).toBe(true);
      });
    });
  });
});
