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

  function makeStormy() {
    spyOn(Math, 'random').and.returnValue(stormy);
    weather.createConditions();
  };

  function makeCalm() {
    spyOn(Math, 'random').and.returnValue(calm);
    weather.createConditions();
  };

  describe("createConditions", function() {
    it("can create calm weather", function() {
      makeCalm();
      expect(weather.stormy).toBe(false);
    });
    it("can create stormy weather", function() {
      makeStormy();
      expect(weather.stormy).toBe(true);
    });
  });

  describe("isStormy", function() {
    it("returns true if the weather is stormy", function() {
      makeStormy();
      expect(weather.isStormy()).toBe(true);
    });
    it("returns false if the weather is calm", function() {
      makeCalm();
      expect(weather.isStormy()).toBe(false);
    });
  });
});
