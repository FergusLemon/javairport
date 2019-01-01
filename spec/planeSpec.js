'use strict';

describe("Plane", function() {
  var plane;
  var airport;
  var anotherAirport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('Airport', ['landPlane']);
    anotherAirport = jasmine.createSpy('Another Airport');
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
        plane.takeOff(plane.location);
        plane.land(airport);
        expect(plane.getLocation()).toBe(airport);
      });
    });
  });

  describe("Take Off", function() {
    beforeEach(function() {
      plane.takeOff(plane.location);
    });
    it("puts the plane in the air", function() {
      expect(plane.isFlying()).toBe(true);
    });
    describe("when a plane is flying", function() {
      it("throws an error", function() {
        expect(function() {
          plane.takeOff(plane.location);
        }).toThrowError("This plane is already in the air.");
      });
    });
    describe("when cleared for take off from the wrong airport", function() {
      it("throws an error", function() {
        plane.land(airport);
        expect(function() {
          plane.takeOff(anotherAirport);
        }).toThrowError("This plane is at a different location.");
      });
    });
  });

  describe("Land", function() {
    beforeEach(function() {
      plane.takeOff(plane.location);
    });
    it("puts the plane on the ground", function() {
      plane.land(airport);
      expect(plane.isFlying()).toBe(false);
    });
    it("updates the plane's location to the aiport it lands at", function() {
      plane.land(airport);
      expect(plane.location).toBe(airport);
    });
    describe("when the plane is already on the ground", function() {
      it("throws an error", function() {
        plane.land(airport);
        expect(function() {
          plane.land(airport);
        }).toThrowError("This plane is already on the ground.");
      });
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
