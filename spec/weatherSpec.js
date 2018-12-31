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
      weather.createConditions();
      expect(weather.calm).toBe(true);
      expect(weather.stormy).toBe(false);
    });
    it("can create stormy weather", function() {
      spyOn(Math, 'random').and.returnValue(stormy);
      weather.createConditions();
      expect(weather.stormy).toBe(true);
      expect(weather.calm).toBe(false);
    });
  });
});
