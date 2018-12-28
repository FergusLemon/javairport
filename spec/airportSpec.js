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
});

