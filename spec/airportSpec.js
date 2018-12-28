'use strict';

describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('Plane', ['land']);
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
    it("adds a plane to the airport's planes", function() {
      airport.landPlane(plane);
      expect(airport.planes.length).toEqual(1);
      expect(airport.planes).toContain(plane);
    });
    it("tells a plane to land", function() {
      airport.landPlane(plane);
      expect(plane.land).toHaveBeenCalled();
    });
  });
});

