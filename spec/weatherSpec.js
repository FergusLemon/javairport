'use strict';

describe("Weather", function() {
  var weather;
  var calm;
  var stormy;

  beforeEach(function() {
    weather = new Weather();
    calm = 0.5;
    stormy = 0.9;
  });

  describe("createConditions", function() {
    it("can create calm weather", function() {
      spyOn(Math, 'random').and.returnValue(calm);
      expect(weather.createConditions()).toBe('Calm');
    });
  });
});
