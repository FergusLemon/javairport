'use strict';

describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe("Capacity", function() {
    it("of an airport defaults to 100", function() {
      expect(airport.capacity).toEqual(airport.DEFAULT_CAPACITY);
    });
  });

  describe("Planes", function() {
    it("is an array of all planes at an airport", function() {
      expect(airport.planes).toBeTruthy();
    });
    it("is empty by default", function() {
      expect(airport.planes.length).toEqual(0);
    });
  });

  describe("Land Plane", function() {
    it("allows an air traffic controller to instruct a plane to land", function() {
      var plane = {};
      airport.landPlane(plane);
      expect(airport.planes.length).toEqual(1);
      expect(airport.planes).toContain(plane);
    });
  });
});

