'use strict';

describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  describe("createConditions", function() {
    it("can create calm weather", function() {
      spyOn(Math, 'random').and.returnValue(0.5);
      expect(weather.createConditions()).toBe('Calm');
    });
  });
});
