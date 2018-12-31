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

  describe("getCapacity", function() {
    it("returns the capacity of the airport", function() {
      expect(airport.getCapacity()).toEqual(airport.DEFAULT_CAPACITY);
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
    describe("when an airport is full", function() {
      it("throws an error", function() {
        var capacity = airport.DEFAULT_CAPACITY;
        for(var i = 0; i < capacity; i++) {
          airport.landPlane(plane);
        }
        expect(function() {
          airport.landPlane(plane);
        }).toThrowError("This airport is full, you cannot land here.");
      });
    });
  });

  describe("isFull", function() {
    describe("when the default capacity of planes has been reached", function() {
      it("returns true", function() {
        var capacity = airport.DEFAULT_CAPACITY;
        for(var i = 0; i < capacity; i++) {
          airport.landPlane(plane);
        }
        expect(airport.isFull()).toEqual(true);
      });
    });
    describe("when the airport has not reached its default capacity", function() {
      it("returns false", function() {
        var halfCapacity = airport.DEFAULT_CAPACITY / 2;
        for(var i = 0; i < halfCapacity; i++) {
          airport.landPlane(plane);
        }
        expect(airport.isFull()).toEqual(false);
      });
    });
  });
});

