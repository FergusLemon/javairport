'use strict';

describe("Airport", function() {
  var airport;
  var largeAirport;
  var plane;
  var anotherPlane;
  var weather;

  beforeEach(function() {
    weather = jasmine.createSpyObj('Weather', ['isStormy']);
    airport = new Airport(weather);
    largeAirport = new Airport(weather, 200);
    plane = jasmine.createSpyObj('Plane', ['land', 'takeOff']);
    anotherPlane = jasmine.createSpyObj('Plane', ['land', 'takeOff']);
  });

  function fillAirport() {
    var capacity = airport.capacity;
    for(var i = 0; i < capacity; i++) {
      airport.landPlane(plane);
    }
  };

  describe("capacity", function() {
    it("of an airport defaults to 100", function() {
      expect(airport.capacity).toBe(airport.DEFAULT_CAPACITY);
    });
    it("can be set by an airtraffic controller", function() {
      expect(largeAirport.capacity).toBeGreaterThan(airport.DEFAULT_CAPACITY);
    });
  });

  describe("getCapacity", function() {
    it("returns the capacity of the airport", function() {
      expect(airport.getCapacity()).toBe(airport.DEFAULT_CAPACITY);
      expect(largeAirport.getCapacity()).toBeGreaterThan(airport.DEFAULT_CAPACITY);
    });
  });

  describe("planes", function() {
    it("is an array of all planes at an airport", function() {
      expect(airport.planes).toBeTruthy();
    });
    it("is empty by default", function() {
      expect(airport.planes.length).toBe(0);
    });
  });

  describe("landPlane", function() {
    it("adds a plane to the airport's planes", function() {
      airport.landPlane(plane);
      expect(airport.planes.length).toBe(1);
      expect(airport.planes).toContain(plane);
    });
    it("tells a plane to land", function() {
      airport.landPlane(plane);
      expect(plane.land).toHaveBeenCalled();
    });
    it("checks the weather is safe for landing a plane", function() {
      airport.landPlane(plane);
      expect(weather.isStormy).toHaveBeenCalled();
    });

    describe("when an airport is full", function() {
      beforeEach(function () {
        fillAirport();
      });
      it("throws an error", function() {
        expect(function() {
          airport.landPlane(plane);
        }).toThrowError("This airport is full, you cannot land here.");
      });
      it("does not allow the plane to land", function() {
        var capacity = airport.DEFAULT_CAPACITY;
        expect(airport.getCapacity()).toBe(capacity);
      });
    });

    describe("when the weather is stormy", function() {
      it("throws and error", function() {
        weather.isStormy.and.returnValue(true);
        expect(function() {
          airport.landPlane(plane);
        }).toThrowError("It is too stormy to land at this airport.");
      });
    });
  });

  describe("clearForTakeOff", function() {
    describe("when there is one plane at the airport", function() {
      beforeEach(function() {
        airport.landPlane(plane);
        airport.clearForTakeOff(plane);
      });
      it("instructs a plane to take off", function() {
        expect(plane.takeOff).toHaveBeenCalled();
      });
      it("removes the plane from the airport", function() {
        expect(airport.planes.length).toBe(0);
        expect(airport.planes).not.toContain(plane);
      });
    });

    describe("when there is more than one plane at the airport", function() {
      beforeEach(function() {
        airport.landPlane(plane);
        airport.landPlane(anotherPlane);
        airport.clearForTakeOff(plane);
      });
      it("removes the correct plane from the airport", function() {
        expect(airport.planes).toContain(anotherPlane);
        expect(airport.planes).not.toContain(plane);
      });
    });

    describe("when the weather is stormy", function() {
      it("throws and error", function() {
        weather.isStormy.and.returnValue(true);
        expect(function() {
          airport.clearForTakeOff(plane);
        }).toThrowError("It is too stormy to take off from this airport.");
      });
    });
  });

  describe("isFull", function() {
    describe("when the default capacity of planes has been reached", function() {
      it("returns true", function() {
        fillAirport();
        expect(airport.isFull()).toBe(true);
      });
    });
    describe("when the airport has not reached its default capacity", function() {
      it("returns false", function() {
        var halfCapacity = airport.DEFAULT_CAPACITY / 2;
        for(var i = 0; i < halfCapacity; i++) {
          airport.landPlane(plane);
        }
        expect(airport.isFull()).toBe(false);
      });
    });
  });
});
